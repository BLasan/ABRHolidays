import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  day_count:number;
  arrayTemp:Array<number>=[];
  form:any;
  isEmptyDay:boolean=false;
  isEmptyDest:boolean=false;
  isEmptyOvernight:boolean=false;
  isEmptyDrive:boolean=false;
  isEmptyDesc:boolean=false;
  isValid:boolean=true;
  package_details_array:Array<{day:number,destination:String,overnight_stay:String,drive:String,description:String}>=[];
  constructor(private _db:AngularFirestore,private snackBar:MatSnackBar) { }

  ngOnInit() {
    
    this.form=new FormGroup({
      package_name:new FormControl('',Validators.required),
      package_category:new FormControl('',Validators.required),
      day_counts:new FormControl('',Validators.required),
      // day_no:new FormControl('',Validators.required),
      // destination:new FormControl('',Validators.required),
      // overnight:new FormControl('',Validators.required),
      // drive:new FormControl('',Validators.required),
      // description:new FormControl('',Validators.required),
    });
  }

  create_package(){
   let package_name=(<HTMLInputElement>document.getElementById("package_name")).value; 
   let category=(<HTMLInputElement>document.getElementById("category")).value;
   let no_of_days=this.day_count;

   for(var i=0;i<this.day_count;i++){
     var day_id="day"+i;
     var dest_id="destination"+i;
     var overnight_id="overnight"+i;
     var drive_id="drive"+i;
     var desc_id="description"+i;
     console.log(day_id);

     let day_no=parseInt((<HTMLInputElement>document.getElementById(day_id)).value);
     let destination=(<HTMLInputElement>document.getElementById(dest_id)).value;
     let overnight=(<HTMLInputElement>document.getElementById(overnight_id)).value;
     let drive=(<HTMLInputElement>document.getElementById(drive_id)).value;
     let description=(<HTMLInputElement>document.getElementById(desc_id)).value;
     console.log(description);
     
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

     let obj={day:day_no,destination:destination,overnight_stay:overnight,drive:drive,description:description};
     this.package_details_array.push(obj);

   }

   let snackBar=this.snackBar;
   let form=this.form;
   
   if(this.isValid){
    let docs={package_name:package_name,package_category:category,no_of_days:no_of_days,details:this.package_details_array};
    this._db.collection("packages").doc(package_name).set(docs).then(function(doc){
      form.reset();
      snackBar.open("Successfully Created","OK",{
        duration:2000,
      });
    }).catch(function(err){
      console.log(err);
      snackBar.open(err,"Re-Submit",{
        duration:2000,
      });
    });

   }

  }

}
