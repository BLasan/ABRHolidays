import { Component, OnInit } from '@angular/core';
import { load_hotel_name} from '../../../../scripts/frontend/load_hotel_name'
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { adjust_mobile_view_home} from '../../../../scripts/frontend/mobile_view';
import { click_carousal_button,lazy_load} from '../../../../scripts/frontend/home_page';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  package_data:any=[];
  news_feed_data_array:any=[];
  image_carousal_array:any=[];
  _init_image:any;
  _init_day_count:string;
  _init_package_id:string;
  _init_package_image:any;
  _init_news_title:string;
  _init_news:string;
  _init_news_id:string;
  news_feed_news:any=[];
  first_image_url:String="https://firebasestorage.googleapis.com/v0/b/hotel-management-5b661.appspot.com/o/image_package%2Fbg.jpg?alt=media&token=cd6eb9a2-ff27-464a-8194-e6c0def3046f";
  constructor(private _db:AngularFirestore,private auth:AngularFireAuth) { }

  ngOnInit() {
    // load_hotel_name()
    //lazy_load();
    //console.log(localStorage.getItem('package_init'))
    // this._init_package_image=localStorage.getItem('package_init');
    //this._init_image=localStorage.getItem('image_carousal_init');
    // this._init_day_count=localStorage.getItem('day_count');
    // this._init_package_id=localStorage.getItem('package_id');
    // this._init_news=localStorage.getItem('news');
    // this._init_news_id=localStorage.getItem('news_id');
    // this._init_news_title=localStorage.getItem('news_title');
    // console.log(this._init_news_title)
    this.image_carousal(()=>{
      console.log("Loaded1");
      adjust_mobile_view_home();
    });
    this.inbound_data_variable(()=>{
      console.log("Loaded2");
      adjust_mobile_view_home();
    })
    this.news_feed(()=>{
      console.log("Loaded3");
      adjust_mobile_view_home();
    })

  }

  ngAfterViewInit(){
    // if(this.package_data.length>0)
    // click_carousal_button();
  }

  inbound_data_variable=function load_inbound_data(callback){
    var _this=this;
    var count=0;
    var doc_inbound=this._db.firestore.collection('packages');
    doc_inbound.get().then(snapshot=>{
      if (snapshot.empty) {
        // alert("Empty Data");
        // console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        count++;
        if(doc.data().status!='deleted' && count!==1){
          // if(doc.data().image_url!=_this._init_package_image)
          _this.package_data.push(doc.data());
        }
        else if(doc.data().status!='deleted' && count===1){
          _this._init_package_image=doc.data().image_url;
          _this._init_package_id=doc.id;
          _this._init_day_count=doc.data().no_of_days;
        }

      });
      callback();
      }).catch(err => {
        // alert("Error");
        // console.log('Error getting documents', err);
      });
  }

  news_feed=function load_news_feed(callback){
    var _this=this;
    var count=0;
    var doc_newsFeed=this._db.firestore.collection('news_feed');
    doc_newsFeed.get().then(snapshot=>{
      if (snapshot.empty) {
        // alert("Empty Data");
        // console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc => {
        count++;
        // console.log(doc.id, '=>', doc.data());
        if(doc.data().status!=='deleted' && count!==1){
          _this.news_feed_data_array.push(doc.data());
          let string=doc.data().news.substr(0,281);
          let lastIndex=string.lastIndexOf(".");
          if(lastIndex<0){
            lastIndex=string.lastIndexOf("");
            if(lastIndex<0) lastIndex=string.lastIndexOf(",");
          }
          // console.log(lastIndex)
          let substring=string.substr(0,lastIndex)+"  ........";
          _this.news_feed_news.push(substring);
        }
        else if(doc.data().status!=='deleted' && count===1){
          let string=doc.data().news.substr(0,281);
          let lastIndex=string.lastIndexOf(".");
          if(lastIndex<0){
            lastIndex=string.lastIndexOf("");
            if(lastIndex<0) lastIndex=string.lastIndexOf(",");
          }
          // console.log(lastIndex)
          _this._init_news=string.substr(0,lastIndex)+"  ........";
          _this._init_news_id=doc.id;
          _this._init_news_title=doc.data().title;
        }
      });
      callback();

      // if(this.image_carousal_array.length>0)
      // click_carousal_button();

      }).catch(err => {
        // alert(err);
        // console.log('Error getting documents', err);
      });
  }

  image_carousal=function load_image_carousal(callback){
    var _this=this;
    var doc_image_carousal=this._db.firestore.collection('image_carousals');
    doc_image_carousal.get().then(snapshot=>{
      if (snapshot.empty) {
        // alert("Empty Data");
        // console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        // if(doc.id!="image0"){
          // console.log(doc.data().fileUrl)
          _this.image_carousal_array.push(doc.data());
        // }
        // else
        _this._init_image=doc.data().fileUrl;
      });
      callback();
      }).catch(err => {
        // alert(err);
        // console.log('Error getting documents', err);
      });
  }

}
