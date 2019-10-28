import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';
import { disable_delete_news_feed} from '../../../../scripts/frontend/disable_href_links';
@Component({
  selector: 'app-manage-news-feed',
  templateUrl: './manage-news-feed.component.html',
  styleUrls: ['./manage-news-feed.component.scss']
})
export class ManageNewsFeedComponent implements OnInit {

  newsFeed_data:any=[];
  constructor(private _db:AngularFirestore) { }

  ngOnInit() {
    this.load_news_feed()
  }

  create_news_feed(){
    let news=(<HTMLInputElement>document.getElementById('news')).value;
    let title=(<HTMLInputElement>document.getElementById('title')).value;
    let today=new Date();
    let date=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(today.getDate());
    console.log(date);
    let id=this.generate_news_feed_id(date,title);
    let news_details={news:news,date:date,title:title,id:id,status:""};
    this._db.collection('news_feed').doc(id).set(news_details).then(function(docs){
      console.log("Done");
      (<HTMLInputElement>document.getElementById('news')).value="";
      (<HTMLInputElement>document.getElementById('title')).value="";
    }).catch(function(error){
      console.log(error)
    });
    this.load_news_feed();
  }

  generate_news_feed_id(date:any,title:string){
    return date+"@"+title;
  }

  load_news_feed(){
    var docRef=this._db.firestore.collection('news_feed');
    docRef.get().then(snapshot=>{
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
  
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        if(doc.data().status!='deleted')
        this.newsFeed_data.push(doc.data());
      });

      }).catch(err => {
        console.log('Error getting documents', err);
      });
  }

  delete(id:any){
    disable_delete_news_feed();
    this._db.collection('news_feed').doc(id).update({status:'deleted'});
    this.load_news_feed();
  }

}
