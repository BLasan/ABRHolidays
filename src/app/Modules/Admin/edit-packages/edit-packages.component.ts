import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { categories} from '../../../../scripts/frontend/package_categories';
@Component({
  selector: 'app-edit-packages',
  templateUrl: './edit-packages.component.html',
  styleUrls: ['./edit-packages.component.scss']
})
export class EditPackagesComponent implements OnInit {

  package_id:any;
  day_count:number=1;
  image_file:FileList;
  // arrayTemp:Array<number>=[];
  destination_array:number[]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  package_details:any=[];
  form:any;
  isEmptyDay:boolean=false;
  isEmptyDest:boolean=false;
  isEmptyOvernight:boolean=false;
  isEmptyDrive:boolean=false;
  isEmptyDesc:boolean=false;
  isValid:boolean=true;
  package_category_array:any;
  package_details_array:Array<{day:number,destination_drive:number[],overnight_stay:String}>=[];
  constructor(private route:ActivatedRoute,private _db:AngularFirestore) { }

  ngOnInit() {
    
   // this._init_();
    this.route.params.subscribe(params => {
      this.package_id=params.package_id;
      this.load_package_data();
    });

    this.package_category_array=categories;
  }

  _init_(){
    // console.log(this.package_details[0])
    this.form=new FormGroup({
        package_name:new FormControl(this.package_details[0].package_name,Validators.required),
        package_category:new FormControl(this.package_details[0].package_category,Validators.required),
        // day_counts:new FormControl({vaue:this.package_details[0].no_of_days,disabled:true},Validators.required),
        // day_no:new FormControl('',Validators.required),
        // destination:new FormControl('',Validators.required),
        // overnight:new FormControl('',Validators.required),
        // drive:new FormControl('',Validators.required),
        // description:new FormControl('',Validators.required),
    })
  }

  load_package_data(){
    var _this=this;
    this._db.firestore.collection('packages').doc(this.package_id).get().then(docs=>{
      if(docs.exists){
        _this.package_details.push(docs.data());
        _this._init_();
      }
    }).catch(err=>{
      alert("Error");
    })
  }

}
