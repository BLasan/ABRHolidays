import { Component, OnInit } from '@angular/core';
import { load_hotel_name} from '../../../../scripts/frontend/load_hotel_name'
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  package_data:any=[];
  news_feed_data_array:any=[];
  first_image_url:String="https://firebasestorage.googleapis.com/v0/b/hotel-management-5b661.appspot.com/o/image_package%2Fbg.jpg?alt=media&token=cd6eb9a2-ff27-464a-8194-e6c0def3046f";
  constructor(private _db:AngularFirestore) { }

  ngOnInit() {
    // load_hotel_name()
    this.load_inbound_data();
    this.load_news_feed();
  }

  load_inbound_data(){
    var doc_inbound=this._db.firestore.collection('packages');
    doc_inbound.get().then(snapshot=>{
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        if(doc.data().status!='deleted'){
          this.package_data.push(doc.data());
        }
      });

      }).catch(err => {
        console.log('Error getting documents', err);
      });
  }

  load_news_feed(){
    var doc_newsFeed=this._db.firestore.collection('news_feed');
    doc_newsFeed.get().then(snapshot=>{
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        if(doc.data().status==''){
          this.news_feed_data_array.push(doc.data());
        }
      });

      }).catch(err => {
        console.log('Error getting documents', err);
      });
  }

}
