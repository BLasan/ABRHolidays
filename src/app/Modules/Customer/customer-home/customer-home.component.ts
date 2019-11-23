import { Component, OnInit } from '@angular/core';
import { load_hotel_name} from '../../../../scripts/frontend/load_hotel_name'
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { adjust_mobile_view_home} from '../../../../scripts/frontend/mobile_view';
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
  first_image_url:String="https://firebasestorage.googleapis.com/v0/b/hotel-management-5b661.appspot.com/o/image_package%2Fbg.jpg?alt=media&token=cd6eb9a2-ff27-464a-8194-e6c0def3046f";
  constructor(private _db:AngularFirestore) { }

  ngOnInit() {
    // load_hotel_name()
    adjust_mobile_view_home();
    this.load_image_carousal();
    this.load_inbound_data();
    this.load_news_feed();
  }

  load_inbound_data(){
    var _this=this;
    var doc_inbound=this._db.firestore.collection('packages');
    doc_inbound.get().then(snapshot=>{
      if (snapshot.empty) {
        alert("Empty Data");
        // console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        if(doc.data().status!='deleted'){
          _this.package_data.push(doc.data());
        }
      });

      }).catch(err => {
        alert("Error");
        // console.log('Error getting documents', err);
      });
  }

  load_news_feed(){
    var _this=this;
    var doc_newsFeed=this._db.firestore.collection('news_feed');
    doc_newsFeed.get().then(snapshot=>{
      if (snapshot.empty) {
        alert("Empty Data");
        // console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        if(doc.data().status==''){
          _this.news_feed_data_array.push(doc.data());
        }
      });

      }).catch(err => {
        alert("Error");
        // console.log('Error getting documents', err);
      });
  }

  load_image_carousal(){
    var _this=this;
    var doc_image_carousal=this._db.firestore.collection('image_carousals');
    doc_image_carousal.get().then(snapshot=>{
      if (snapshot.empty) {
        alert("Empty Data");
        // console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        if(doc.id!="image0"){
          // console.log(doc.data().fileUrl)
          _this.image_carousal_array.push(doc.data());
        }
        else if(doc.id=="image0"){
          _this._init_image=doc.data().fileUrl;
          // console.log(_this._init_image)
        }
      });

      }).catch(err => {
        alert("Error");
        // console.log('Error getting documents', err);
      });
  }

}
