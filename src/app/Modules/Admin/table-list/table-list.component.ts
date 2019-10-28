import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  package_data:any=[];
  constructor(private _db:AngularFirestore) { }

  ngOnInit() {
    this.load_package_data();
  }

  load_package_data(){
    var docRef=this._db.firestore.collection('packages');
    docRef.get().then(snapshot=>{
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
  
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        this.package_data.push(doc.data());
      });

      }).catch(err => {
        console.log('Error getting documents', err);
      });
  
  }

}
