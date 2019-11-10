import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';
import { disable_delete_news_feed,disable_edit_news_feed} from '../../../../scripts/frontend/disable_href_links';
import { enable_search_bar,disable_search_bar} from '../../../../scripts/frontend/disable_enable_search_bar.js';
import { news_feed_image_uploader} from '../../../../scripts/frontend/image_uploader';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-news-feed',
  templateUrl: './manage-news-feed.component.html',
  styleUrls: ['./manage-news-feed.component.scss']
})
export class ManageNewsFeedComponent implements OnInit {

  newsFeed_data:any=[];
  filtered_news_feed:any=[];
  news_feed_id:any;
  file_list:any=[];
  constructor(private _db:AngularFirestore,private storage:AngularFireStorage,private route:ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   let parameter=params.search_text;
    //   if(parameter=="news")
    //   this.load_news_feed();
    //   else
    //   this.filter_news_feed(parameter);
    // });
    enable_search_bar();
    this.load_news_feed();
    //this.filter_news_feed();
  }

  create_news_feed(){
    let news=(<HTMLInputElement>document.getElementById('news')).value;
    let title=(<HTMLInputElement>document.getElementById('title')).value;
    let today=new Date();
    let date=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(today.getDate());
    console.log(date);
    let id=this.generate_news_feed_id(date,title);
    var imageId="news_feed/image"+today.getTime();
    let storageRef=this.storage.ref(imageId);
    var _this=this;
    storageRef.put(this.file_list.item(0)).then(function(snapshot){
      storageRef.getDownloadURL().subscribe(url=>{
      let news_details={news:news,date:date,title:title,id:id,status:"",image_url:url};

      _this._db.collection('news_feed').doc(id).set(news_details).then(function(docs){
          console.log("Done");
          (<HTMLInputElement>document.getElementById('news')).value="";
          (<HTMLInputElement>document.getElementById('title')).value="";
          (<HTMLInputElement>document.getElementById('file_name')).innerHTML="";
          (<HTMLInputElement>document.getElementById('news_feed_img_uploader')).value="";
        }).catch(function(error){
          console.log(error)
        });
      })
    })

    this.load_news_feed();
  }

  generate_news_feed_id(date:any,title:string){
    return date+"@"+title;
  }

  load_news_feed(){
    this.newsFeed_data=[];
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

  // filter_news_feed(){
  //   this.searchText.get_search_text().subscribe((data:Search)=>{
  //     console.log(data)
  //   })
  //   this.newsFeed_data=[];
  //   var docRef=this._db.firestore.collection('news_feed');
  //   docRef.get().then(snapshot=>{
  //     if (snapshot.empty) {
  //       console.log('No matching documents.');
  //       return;
  //     }  
  
  //     snapshot.forEach(doc => {
  //       console.log(doc.id, '=>', doc.data());
  //       if(doc.data().status!='deleted')
  //       this.newsFeed_data.push(doc.data());
  //     });

  //     }).catch(err => {
  //       console.log('Error getting documents', err);
  //     });
  // }

  delete(id:any){
    disable_delete_news_feed();
    this._db.collection('news_feed').doc(id).update({status:'deleted'});
    this.load_news_feed();
  }

  load_modal(id:any){
    disable_edit_news_feed();
    this.filtered_news_feed=[];
    this.filtered_news_feed=this.newsFeed_data.filter(x=>x.id==id);
    this.news_feed_id=id;
  }

  edit_news_feed(){
    let id=this.news_feed_id;
    let news=(<HTMLInputElement>document.getElementById('edit_news')).value;
    let title=(<HTMLInputElement>document.getElementById('edit_title')).value;
    let today=new Date();
    let date=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(today.getDate());
    let obj={news:news,date:date,title:title};
    this._db.collection('news_feed').doc(id).update(obj);
    this.load_news_feed();
  }

  upload_image(){
    news_feed_image_uploader();
  }

  get_files(event){
    console.log(event.target.files);
    this.file_list=event.target.files;
  }

}
