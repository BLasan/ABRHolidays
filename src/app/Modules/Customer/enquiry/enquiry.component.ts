import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SendMailService } from '../../../services/send_mail.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { country_array} from '../../../../scripts/frontend/load_country';
import CryptoJS from 'crypto-js';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  form:any;
  data:any;
  package_name:any;
  country_array:any;
  airfare_check:any="Yes";
  travel_interest_check:any="Yes";
  physical_activities:any=[];
  sun_activities:any=[];
  adventure_activities:any=[];
  specific_interests:any=[];
  search_engines:any=[];
  isSelected:boolean=true;
  accomodation_options:any=["Please Select....","Three Star","Four Star","Five Star","Botique/villa"];
  meal_plan_option:any=["Please Select....","Bed & Breakfirst","Half Board","Full Board","All inclusive"];
  constructor(private _db:AngularFirestore,private service:SendMailService,private _snackbar:MatSnackBar,private route:ActivatedRoute) { }

  ngOnInit() {
    this.country_array=country_array;
    this.route.params.subscribe(params => {
      this.package_name=params.package;
      var sub=this.package_name;
      this.form=new FormGroup({
        tour_name:new FormControl(sub,Validators.required),
        arrival:new FormControl('',Validators.required),
        departure:new FormControl('',Validators.required),
        budget:new FormControl('',Validators.required),
        no_of_adults:new FormControl('',Validators.required),
        no_of_children:new FormControl('',Validators.required),
        accomodations:new FormControl(this.accomodation_options[0],Validators.required),
        meals:new FormControl(this.meal_plan_option[0],[Validators.required]),
        destinations_experience:new FormControl('',[Validators.required]),
        special_occasion:new FormControl('',[Validators.required]),
        special_requirements:new FormControl('',[Validators.required]),
        first_name:new FormControl('',[Validators.required]),
        second_name:new FormControl('',[Validators.required]),
        address:new FormControl('',[Validators.required]),
        city:new FormControl('',[Validators.required]),
        state:new FormControl('',[Validators.required]),
        dob:new FormControl('',[Validators.required]),
        country:new FormControl(this.country_array[0],[Validators.required]),
        phone:new FormControl('',[Validators.required]),
        nationality:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        other_link:new FormControl('',[]),
        website_link:new FormControl('',[Validators.required]),
        keywords:new FormControl('',[Validators.required]),
        refferal:new FormControl('',[Validators.required]),
        description:new FormControl('',[Validators.required])
      });
    });
  }

  onSubmit(){
    let tour_name=this.form.controls['tour_name'].value;
    let arrival=this.form.controls['arrival'].value;
    let departure=this.form.controls['departure'].value;
    let no_of_adults=this.form.controls['no_of_adults'].value;
    let no_of_children=this.form.controls['no_of_children'].value;
    let accomodations=this.form.controls['accomodations'].value;
    let meals=this.form.controls['meals'].value;
    let budget=this.form.controls['budget'].value;
    let destinations_experience=this.form.controls['destinations_experience'].value;
    let special_occasion=this.form.controls['special_occasion'].value;
    let special_requirements=this.form.controls['special_requirements'].value;
    let first_name=this.form.controls['first_name'].value;
    let second_name=this.form.controls['second_name'].value;
    let address=this.form.controls['address'].value;
    let city=this.form.controls['city'].value;
    let state=this.form.controls['state'].value;
    let dob=this.form.controls['dob'].value;
    let country=this.form.controls['country'].value;
    let phone=this.form.controls['phone'].value;
    let nationality=this.form.controls['nationality'].value;
    let email=this.form.controls['email'].value;
    let other_link=this.form.controls['other_link'].value;
    let website_link=this.form.controls['website_link'].value;
    let keywords=this.form.controls['keywords'].value;
    let refferal=this.form.controls['refferal'].value;
    let description=this.form.controls['description'].value;
    console.log(country);
    let aifareRadio=this.airfare_check;
    console.log(accomodations)
    console.log(aifareRadio)
    let interest_in_travel=this.travel_interest_check;
    if(other_link!=null) this.search_engines.push(other_link);
    let activity_count=0;
    let ad_activity_count=0;
    let sun_activity_count=0;
    for(var i=1;i<=3;i++){
      var id="activity_"+i;
      let activity=((<HTMLInputElement>document.getElementById(id)).checked);
      if(!activity) activity_count++;
      if(activity) this.physical_activities.push(((<HTMLInputElement>document.getElementById(id)).value));
    }

    for(var i=1;i<=3;i++){
      var id="ad_activity_"+i;
      let activity=((<HTMLInputElement>document.getElementById(id)).checked);
      if(!activity) ad_activity_count++;
      if(activity) this.adventure_activities.push(((<HTMLInputElement>document.getElementById(id)).value));
    }

    for(var i=1;i<=3;i++){
      var id="sun_activity_"+i;
      let activity=((<HTMLInputElement>document.getElementById(id)).checked);
      if(!activity) sun_activity_count++;
      if(activity) this.sun_activities.push(((<HTMLInputElement>document.getElementById(id)).value));
    }

    var interest_count=0;
    for(var i=1;i<=14;i++){
      var id="interest_"+i;
      let interest=((<HTMLInputElement>document.getElementById(id)).checked);
      if(!interest) interest_count++;
      if(interest) this.specific_interests.push(((<HTMLInputElement>document.getElementById(id)).value))
    }

    var search_count=0;
    for(var i=1;i<=4;i++){
      var id="search_engine_"+i;
      let search_engine=((<HTMLInputElement>document.getElementById(id)).checked);
      if(!search_engine) search_count++;
      console.log(((<HTMLInputElement>document.getElementById(id)).value))
      if(search_engine) this.search_engines.push(((<HTMLInputElement>document.getElementById(id)).value));
    }
    console.log(search_count+"->S")
    if(search_count==4 || interest_count==14 || activity_count==9) this.isSelected=false;

    let date=new Date();
    let today=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"--"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var id=email+"@"+today;
    var hash= CryptoJS.SHA256(id).toString();
    let user_enquiry={tour_name:tour_name,arrival:arrival,departure:departure,no_of_adults:no_of_adults,no_of_children:no_of_children,accomodations:accomodations,
                      meals:meals,destinations_experience:destinations_experience,special_occasion:special_occasion,special_requirements:special_requirements,first_name:first_name,
                      second_name:second_name,address:address,city:city,state:state,dob:dob,country:country,phone:phone,budget:budget,
                      nationality:nationality,email:email,website_link:website_link,keywords:keywords,refferal:refferal,description:description,
                      airfare_check:aifareRadio,interest_in_travel:interest_in_travel,physical_activities:this.physical_activities,specific_interests:this.specific_interests,
                      search_engines:this.search_engines,date:today,id:hash,view:false,adventure_activities:this.adventure_activities,sun_activities:this.sun_activities,referral:refferal};
   
    var _this=this;
    this._db.collection('enquiry').doc(hash).set(user_enquiry).then(()=>{
      _this._snackbar.open("Successfully Submitted!","OK",{
        duration:300
      });
      console.log(user_enquiry)
    }).catch(err=>{
      alert("Error Submitting");
    });
    this.reset_form();
  }

  radioCheck1(event:any){
    this.airfare_check=event.target.value;
    console.log(this.airfare_check)
  }

  radioCheck2(event:any){
    this.travel_interest_check=event.target.value;
  }

  reset_form(){
    this.form.reset();
    ((<HTMLInputElement>document.getElementById('tour_name')).value)="";
    ((<HTMLInputElement>document.getElementById('arrival')).value)="";
    ((<HTMLInputElement>document.getElementById('no_of_adults')).value)="";
    ((<HTMLInputElement>document.getElementById('no_of_children')).value)="";
    ((<HTMLInputElement>document.getElementById('accomodations')).value)="";
    ((<HTMLInputElement>document.getElementById('meals')).value)="";
    ((<HTMLInputElement>document.getElementById('destinations_experience')).value)="";
    ((<HTMLInputElement>document.getElementById('special_occasion')).value)="";
    ((<HTMLInputElement>document.getElementById('first_name')).value)="";
    ((<HTMLInputElement>document.getElementById('second_name')).value)="";
    ((<HTMLInputElement>document.getElementById('address')).value)="";
    ((<HTMLInputElement>document.getElementById('city')).value)="";
    ((<HTMLInputElement>document.getElementById('state')).value)="";
    ((<HTMLInputElement>document.getElementById('dob')).value)="";
    ((<HTMLInputElement>document.getElementById('phone')).value)="";
    ((<HTMLInputElement>document.getElementById('nationality')).value)="";
    ((<HTMLInputElement>document.getElementById('email')).value)="";
    ((<HTMLInputElement>document.getElementById('other_link')).value)="";
    ((<HTMLInputElement>document.getElementById('website_link')).value)="";
    ((<HTMLInputElement>document.getElementById('keywords')).value)="";
    ((<HTMLInputElement>document.getElementById('refferal')).value)="";
    ((<HTMLInputElement>document.getElementById('description')).value)="";
    ((<HTMLInputElement>document.getElementById('country')).value)=this.country_array[0];
    ((<HTMLInputElement>document.getElementById('airfare_Radios_yes')).checked)=true;
    ((<HTMLInputElement>document.getElementById('active_travel_yes')).checked)=true;
    this.physical_activities=[];
    this.specific_interests=[];
    this.search_engines=[];
    for(var i=1;i<=3;i++){
      var id="activity_"+i;
      ((<HTMLInputElement>document.getElementById(id)).checked)=false;
    }
    for(var i=1;i<=3;i++){
      var id="ad_activity_"+i;
      ((<HTMLInputElement>document.getElementById(id)).checked)=false;
    }
    for(var i=1;i<=3;i++){
      var id="sun_activity_"+i;
      ((<HTMLInputElement>document.getElementById(id)).checked)=false;
    }
    for(var i=1;i<=14;i++){
      var id="interest_"+i;
      ((<HTMLInputElement>document.getElementById(id)).checked)=false;
    }
    for(var i=1;i<=4;i++){
      var id="search_engine_"+i;
      ((<HTMLInputElement>document.getElementById(id)).checked)=false;
    }
  }

}
