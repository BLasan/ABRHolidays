import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  day_count:number;
  package_details_array:Array<{day:number,destination:String,overnight_stay:String,drive:String,description:String}>=[];
  constructor(private _db:AngularFirestore) { }

  ngOnInit() {

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

     let day_no=parseInt((<HTMLInputElement>document.getElementById(day_id)).value);
     let destination=(<HTMLInputElement>document.getElementById(dest_id)).value;
     let overnight=(<HTMLInputElement>document.getElementById(overnight_id)).value;
     let drive=(<HTMLInputElement>document.getElementById(drive_id)).value;
     let description=(<HTMLInputElement>document.getElementById(desc_id)).value;

     let obj={day:day_no,destination:destination,overnight_stay:overnight,drive:drive,description:description};
     this.package_details_array.push(obj);

   }

   let docs={package_name:package_name,package_category:category,no_of_days:no_of_days,details:this.package_details_array};

   this._db.collection("packages").doc(package_name).set(docs).then(function(doc){
     console.log(doc);
   }).catch(function(err){
     console.log(err);
   })
  }

}
