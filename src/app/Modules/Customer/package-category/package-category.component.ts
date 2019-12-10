import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { categories} from '../../../../scripts/frontend/package_categories';
import { adjust_mobile_view_inbound_package_category} from '../../../../scripts/frontend/mobile_view';
@Component({
  selector: 'app-package-category',
  templateUrl: './package-category.component.html',
  styleUrls: ['./package-category.component.scss']
})
export class PackageCategoryComponent implements OnInit {

  package_category:any;
  package_data:any=[];
  destination_string:String="";
  package_category_array:any=[];
  constructor(private route:ActivatedRoute,private _db:AngularFirestore) { }

  ngOnInit() {
    adjust_mobile_view_inbound_package_category();
    this.route.params.subscribe(params => {
      this.package_category=params.category;
      // console.log(this.package_category)
      this.load_packages(this.package_category);
      adjust_mobile_view_inbound_package_category();
    });

    this.package_category_array=categories;
  }

  load_packages(category){
    var collection=this._db.firestore.collection('packages');
    collection.get().then(snapshot=>{
      adjust_mobile_view_inbound_package_category();
      if (snapshot.empty) {
        alert("Empty Data");
        // console.log('No matching documents.');
        return;
      }  
  
      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data().package_category);
        if(doc.data().status!='deleted' && doc.data().package_category==category){
          this.package_data.push(doc.data());
          var length=doc.data().details.length;
          // console.log(length)
          for(var j=0;j<length;j++){
            var des_len=doc.data().details[j].destination_drive.length;
            for(var k=0;k<des_len;k++){
              this.destination_string+=doc.data().details[j].destination_drive[k].destination+" / ";
            }
          }
        }
      });

      }).catch(err => {
        alert("Error");
        // console.log('Error getting documents', err);
      });
  }

}
