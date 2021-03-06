import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { categories} from '../../../../scripts/frontend/package_categories';
import { adjust_mobile_view_inbound_packages} from '../../../../scripts/frontend/mobile_view';
@Component({
  selector: 'app-inbound-packages',
  templateUrl: './inbound-packages.component.html',
  styleUrls: ['./inbound-packages.component.scss']
})
export class InboundPackagesComponent implements OnInit {

  package_id:any;
  package_name:string;
  package_data:any=[];
  isLoaded:boolean=false;
  destination_string:String="";
  destination_details:any=[];
  duration:number;
  package_category_array:any=[];
  constructor(private _db:AngularFirestore,private route: ActivatedRoute) { }

  ngOnInit() {
    adjust_mobile_view_inbound_packages();
    this.route.params.subscribe(params => {
      this.package_id=params.code;
      this.load_package_data(this.package_id);
      adjust_mobile_view_inbound_packages();
    });

    this.package_category_array=categories;
  }

  load_package_data(package_id){
    var package_id=package_id;
    var _this=this;
    this._db.firestore.collection('packages').doc(package_id).get().then(function(doc){
      _this.package_data.push(doc.data());
      _this.duration=doc.data().no_of_days;
      _this.package_name=doc.data().package_name;
      _this.filter_destination_details(_this.package_data,_this);
      adjust_mobile_view_inbound_packages();
    }).catch(function(ex){
      alert("Error");
      //  console.log(ex);
    });
    adjust_mobile_view_inbound_packages();
  }

  filter_destination_details(package_data,_this){
    var length=package_data.length;
    // console.log(length)
    for(var i=0;i<length;i++){
      var details_len=package_data[i].details.length;
      // console.log(details_len)
      for(var j=0;j<details_len;j++){
        var destinations_length=package_data[i].details[j].destination_drive.length;
        // console.log(destinations_length)
        for(var k=0;k<destinations_length;k++){
          this.destination_string=this.destination_string+package_data[i].details[j].destination_drive[k].destination+" / ";
          // console.log(this.destination_string)
        }
      }
      adjust_mobile_view_inbound_packages();
    }
  _this.isLoaded=true;
  }
}
