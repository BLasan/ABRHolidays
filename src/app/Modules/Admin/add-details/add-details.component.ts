import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { disable_create_new_destination} from '../../../../scripts/frontend/disable_href_links';
import {  disable_package_image_uploader} from '../../../../scripts/frontend/disable_href_links';
import { package_image_uploader} from '../../../../scripts/frontend/image_uploader';
import { remove_package_image} from '../../../../scripts/frontend/image_uploader';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
import { AngularFireStorage } from '@angular/fire/storage';
import { categories} from '../../../../scripts/frontend/package_categories'
import { enable_search_bar,disable_search_bar} from '../../../../scripts/frontend/disable_enable_search_bar.js';
import { packageImage } from '../../../services/package_service.service';
import CryptoJS from 'crypto-js';
import { adjust_mobile_view_add_pkgBtn} from '../../../../scripts/frontend/mobile_view.js';
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  day_count:number=1;
  image_file:FileList;
  // arrayTemp:Array<number>=[];
  destination_array:number[]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  form:any;
  isUploadedImage:boolean=false;
  // package_index:number=0;
  // isModified:boolean=false;
  // destination_drive_count:number=1;
  isEmptyDay:boolean=false;
  isEmptyDest:boolean=false;
  isEmptyOvernight:boolean=false;
  isEmptyDrive:boolean=false;
  isEmptyDesc:boolean=false;
  isValid:boolean=true;
  package_category_array:any;
  package_details_array:Array<{day:number,destination_drive:number[],overnight_stay:String}>=[];
  constructor(private _db:AngularFirestore,private snackBar:MatSnackBar,private storage:AngularFireStorage) { }

  ngOnInit() {
    disable_search_bar();
    adjust_mobile_view_add_pkgBtn();
    this.form=new FormGroup({
      package_name:new FormControl('',Validators.required),
      file_uploader:new FormControl('',[Validators.required])
      // package_category:new FormControl('',Validators.required),
      // day_counts:new FormControl('',Validators.required),
      // day_no:new FormControl('',Validators.required),
      // destination:new FormControl('',Validators.required),
      // overnight:new FormControl('',Validators.required),
      // drive:new FormControl('',Validators.required),
      // description:new FormControl('',Validators.required),
    });
    this.package_category_array=categories;
    //console.log(this.destination_array[0])
  }

  create_new_destination(index:number){
    this.destination_array[index]+=1;
    // this.destination_drive_count+=1;
    // this.package_index=index;
    // this.isModified=true;
    disable_create_new_destination(index);
  }

  image_uploader(){
    disable_package_image_uploader();
    package_image_uploader();
    this.isUploadedImage=true;
  }

  get_uploaded_image(event){
    this.image_file=event.target.files;
    console.log(this.image_file[0]);
  }

  upload_image(id){
    var imageId="image_package/"+id;
    let storageRef=this.storage.ref(imageId);
    var database=this._db;
    console.log(this.image_file.length);
    storageRef.put(this.image_file[0]).then(function(snapshot){
      storageRef.getDownloadURL().subscribe(url=>{
        // document.querySelector('img').src = url;
        // let fileName=snapshot.metadata.name;
        // let fileContentType=snapshot.metadata.contentType;
        // let fileSize=snapshot.metadata.size;
        // let fileUrl=url;
        // let fileTimeCreated=snapshot.metadata.timeCreated;
        database.collection('packages').doc(id).update({image_url:url});
        });
      });
  }

  remove_image(){
    remove_package_image();
    this.isUploadedImage=false;
    this.form.controls['file_uploader'].value=null;
    this.image_file=null;
  }

  add_new_package_detail(){
    this.day_count+=1;
  }

  create_package(){
   if(this.isUploadedImage){
    let package_name=(<HTMLInputElement>document.getElementById("package_name")).value; 
    let category=(<HTMLInputElement>document.getElementById("category")).value;
   //  console.log(category)
    let no_of_days=this.day_count;
 
    for(var i=0;i<this.day_count;i++){
      var day_id="day"+i;
      var overnight_id="overnight"+i;
     //  console.log(day_id);
 
      let day_no=parseInt((<HTMLInputElement>document.getElementById(day_id)).value);
      let overnight=(<HTMLInputElement>document.getElementById(overnight_id)).value;
      let destination;
      let description;
      let drive;
     //  if(this.destination_drive_count==1){
     //   destination=(<HTMLInputElement>document.getElementById(dest_id)).value;
     //   drive=(<HTMLInputElement>document.getElementById(drive_id)).value;
     //  }
 
      let destination_count=this.destination_array[i];
      let drive_destination_array=[];
 
      for(var j=0;j<destination_count;j++){
       var dest_id="destination"+i+j;
       var drive_id="drive"+i+j;
       var desc_id="description"+i+j;
       destination=(<HTMLInputElement>document.getElementById(dest_id)).value;
       drive=(<HTMLInputElement>document.getElementById(drive_id)).value;
       description=(<HTMLInputElement>document.getElementById(desc_id)).value;
       var package_destination_obj={destination:destination,drive:drive,description:description};
       drive_destination_array.push(package_destination_obj);
      }
 
     //  let description=(<HTMLInputElement>document.getElementById(desc_id)).value;
     //  console.log(description);
      
      if(day_no==0 || destination==null || overnight==null || drive==null || description==null){
       // if(day_no==0){
       //   this.isEmptyDay=true;
       //   break;
       // }
  
       // if(destination==null){
       //  this.isEmptyDest=true;
       //  break;
       // }
  
       // if(overnight==null){
       //  this.isEmptyOvernight=true;
       //  break;
       // }
  
       // if(drive==null){
       //  this.isEmptyDrive=true;
       //  break;
       // }
  
       // if(description==null){
       //  this.isEmptyDesc=true;
       //  break;
       // }
 
       this.isValid=false;
       break;
      }
 
      let obj={day:day_no,destination_drive:drive_destination_array,overnight_stay:overnight};
      this.package_details_array.push(obj);
      drive_destination_array=[];
    }
 
    let snackBar=this.snackBar;
    let form=this.form;
    
    if(this.isValid){
     var today=new Date();
     var remove_image=this;
    //  console.log(this.image_file[0]+"->Images")
     var date=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(today.getDate());
     var package_id=this.generate_package_id(package_name,category,today);
     this.upload_image(package_id);
     let docs={package_id:package_id,package_name:package_name,package_category:category,no_of_days:no_of_days,details:this.package_details_array,date:date,views:0};
     this._db.collection("packages").doc(package_id).set(docs).then(function(doc){
       form.reset();
       remove_image.remove_image();
       snackBar.open("Successfully Created","OK",{
         duration:2000,
       });
     }).catch(function(err){
       // console.log(err);
       snackBar.open(err,"Re-Submit",{
         duration:2000,
       });
     });
     this.reset_form();
    }
   }
   else alert("Please Upload the Image");
   
  }

  reset_form(){
    this.day_count=1;
    var day_id="day"+0;
    var overnight_id="overnight"+0;
    (<HTMLInputElement>document.getElementById(day_id)).value="";
    let overnight=(<HTMLInputElement>document.getElementById(overnight_id)).value="";
    var dest_id="destination"+0+0;
    var drive_id="drive"+0+0;
    var desc_id="description"+0+0;
    (<HTMLInputElement>document.getElementById(dest_id)).value="";
    (<HTMLInputElement>document.getElementById(drive_id)).value="";
    (<HTMLInputElement>document.getElementById(desc_id)).value="";
    this.isUploadedImage=false;
    this.image_file=null;
    this.form.controls['file_uploader'].value=null;
  }


  generate_package_id(package_name:string,package_category:string,date:any){
    var hash= CryptoJS.SHA256(package_category+"@"+package_name+"@"+date).toString();
    return hash;
  }

}
