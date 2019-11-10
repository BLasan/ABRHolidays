import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { disable_delete_package} from '../../../../scripts/frontend/disable_href_links';
@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.scss']
})
export class FilterDataComponent implements OnInit {

  data:any=[];
  type:String;
  searchedText:String;
  filtered_data:any=[];
  constructor(private route:ActivatedRoute,private _db:AngularFirestore) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchedText=params.search_text;
      this.type=params.category;
      if(params.category=="news")
      this.filter_news_feed(this.searchedText);
      else if(params.category=="packages")
      this.filter_packages(this.searchedText);
    });
  }


  filter_news_feed(search_text){
    this.data=[];
    var _this=this;
    var docRef=this._db.firestore.collection('news_feed');
    docRef.get().then(snapshot=>{
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
  
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        if(doc.data().status!='deleted' && doc.data().title==search_text)
        _this.data.push(doc.data());
        
      });

      }).catch(err => {
        console.log('Error getting documents', err);
      });
  }

  filter_packages(search_text){
    this.data=[];
    var _this=this;
    var docRef=this._db.firestore.collection('packages');
    docRef.get().then(snapshot=>{
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
  
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        if(doc.data().status!='deleted' && doc.data().package_name==search_text)
        _this.data.push(doc.data());
      });

      }).catch(err => {
        console.log('Error getting documents', err);
      });
  }

  delete(id:any){
    let variable_this=this;
    disable_delete_package();
    this._db.collection('packages').doc(id).update({status:'deleted'}).then(function(docs){
      variable_this.filter_packages(variable_this.searchedText);
    }).catch(function(error){
      console.log(error);
    }) 
  }

  load_modal(id:any){
    this.filtered_data=this.data.filter(x=> x.package_id==id);
  }

}
