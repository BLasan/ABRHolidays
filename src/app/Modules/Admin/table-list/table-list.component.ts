import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { disable_delete_package} from '../../../../scripts/frontend/disable_href_links';
import { enable_search_bar,disable_search_bar} from '../../../../scripts/frontend/disable_enable_search_bar.js';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  package_data:any=[];
  filtered_data:any=[];
  constructor(private _db:AngularFirestore) { }

  ngOnInit() {
    enable_search_bar();
    this.load_package_data();
  }

  load_package_data(){
    this.package_data=[];
    var docRef=this._db.firestore.collection('packages');
    docRef.get().then(snapshot=>{
      if (snapshot.empty) {
        alert("Empty Data");
        // console.log('No matching documents.');
        return;
      }  
  
      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        if(doc.data().status!='deleted')
        this.package_data.push(doc.data());
      });

      }).catch(err => {
        alert("Error");
        // console.log('Error getting documents', err);
      });
  
  }


  delete(id:any){
    let variable_this=this;
    disable_delete_package();
    this._db.collection('packages').doc(id).update({status:'deleted'}).then(function(docs){
      variable_this.load_package_data();
    }).catch(function(error){
      console.log(error);
    })
  
  }

  load_modal(id:any){
    this.filtered_data=this.package_data.filter(x=> x.package_id==id);
  }

}
