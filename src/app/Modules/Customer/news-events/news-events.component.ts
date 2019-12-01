import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { adjust_mobile_view_about_us} from '../../../../scripts/frontend/mobile_view';
@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.scss']
})
export class NewsEventsComponent implements OnInit {

  news_feed_array:any=[];
  is_target:boolean=false;
  news_title:any;
  constructor(private _db:AngularFirestore,private route:ActivatedRoute) { }

  ngOnInit() {
    adjust_mobile_view_about_us();
    this.route.params.subscribe(params => {
      let parameter=params.news_id;
      if(parameter=="my_news")
       this.load_all_news_feed();
      else {
        this.is_target=true;
        this.load_target_news_feed(parameter);
      }
    });
  }

  load_all_news_feed(){
    this.news_feed_array=[];
    var docRef=this._db.firestore.collection('news_feed');
    docRef.get().then(snapshot=>{
      if (snapshot.empty) {
        alert("Empty Data");
        // console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc=>{
        if(doc.data().status===""){
          this.news_feed_array.push(doc.data());
        }
      })
  
    }).catch(function(err){
      alert("Error")
      // console.log(err);
    })
  }

  load_target_news_feed(id:any){
    let _this=this;
    this.news_feed_array=[];
    this._db.firestore.collection('news_feed').doc(id).get().then(function(doc){
      _this.news_feed_array.push(doc.data());
      _this.news_title=doc.data().title;
  
    }).catch(function(ex){
      alert("Error");
      //  console.log(ex);
    })
  }

}
