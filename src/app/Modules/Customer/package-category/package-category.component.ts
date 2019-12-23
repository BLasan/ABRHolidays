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
  destination_string_array:any=[];
  isLoaded:boolean=false;
  constructor(private route:ActivatedRoute,private _db:AngularFirestore) { }

  ngOnInit() {
    adjust_mobile_view_inbound_package_category();
    this.route.params.subscribe(params => {
      this.package_category=params.category;
      console.log(this.package_category)
      adjust_mobile_view_inbound_package_category();
    });

    this.package_category_array=categories;
  }

  ngAfterViewInit(){
    var _this=this;
    //this.load_packages(this.package_category);
    this._db.firestore.collection('packages').where('package_category','==',this.package_category).where('status','==','Active').get().then(snapshot=>{
      if(snapshot.empty) alert("Empty Data");
      else{
        snapshot.forEach(docs=>{
          if(snapshot.empty) alert("Empty Data");
          else{
            console.log(_this.package_category);
            //if(_this.package_category===docs.data().package_category && docs.data().status!=='deleted'){
            console.log(docs.data().details);
            _this.package_data.push(docs.data());
            var length=docs.data().details.length;
            console.log(length);
            for(var i=0;i<length;i++){
              var destination_length=docs.data().details[i].destination_drive.length;
              console.log(destination_length)
              for(var j=0;j<destination_length;j++){
                _this.destination_string+=docs.data().details[i].destination_drive[j].destination+" /";
              }
              console.log(_this.destination_string);
              _this.destination_string_array.push(_this.destination_string);
              _this.destination_string="";
            }
          // }
          }
        });
        _this.isLoaded=true;
      }
    })
  }

  load_packages(category){
    var _this=this;
    var collection=this._db.firestore.collection('packages');
    collection.get().then(snapshot=>{
      // adjust_mobile_view_inbound_package_category();
      if (snapshot.empty) {
        alert("Empty Data");
        // console.log('No matching documents.');
        return;
      }  
  
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data().package_category);
        if(doc.data().status!='deleted' && doc.data().package_category==category){
          _this.package_data.push(doc.data());  
          console.log(doc.data().details)
          var length=doc.data().details.length;
          console.log(length)
          // for(var j=0;j<length;j++){
          //   var des_len=doc.data().details[j].destination_drive.length;
          //   for(var k=0;k<des_len;k++){
          //     _this.destination_string+=doc.data().details[j].destination_drive[k].destination+" / ";
          //   }
          // }
          _this.destination_string_array.push(_this.destination_string);
          console.log(_this.destination_string_array);
        }
      });

      }).catch(err => {
        alert("Error");
        // console.log('Error getting documents', err);
      });
  }

}
