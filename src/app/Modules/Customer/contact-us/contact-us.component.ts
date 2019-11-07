import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validNumber } from '../../../services/valid_number.service';
import { country_array} from '../../../../scripts/frontend/load_country'
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  form:any;
  country_array_list:any=[];
  constructor(private _db:AngularFirestore) { }

  ngOnInit() {
    this.form=new FormGroup({
      subject:new FormControl('',Validators.required),
      f_name:new FormControl('',Validators.required),
      l_name:new FormControl('',Validators.required),
      message:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      tel:new FormControl('',[Validators.required]),
      // package_category:new FormControl('',Validators.required),
      // day_counts:new FormControl('',Validators.required),
      // day_no:new FormControl('',Validators.required),
      // destination:new FormControl('',Validators.required),
      // overnight:new FormControl('',Validators.required),
      // drive:new FormControl('',Validators.required),
      // description:new FormControl('',Validators.required),
    });

    this.country_array_list=country_array;
  }

  submit_form(){
    let subject=((<HTMLInputElement>document.getElementById('subject')).value);
    let f_name=((<HTMLInputElement>document.getElementById('f_name')).value);
    let l_name=((<HTMLInputElement>document.getElementById('l_name')).value);
    let email=((<HTMLInputElement>document.getElementById('email')).value);
    let tel=((<HTMLInputElement>document.getElementById('tel_no')).value);
    let message=((<HTMLInputElement>document.getElementById('message')).value);
    let country=((<HTMLInputElement>document.getElementById('country')).value);
    let notification_id=subject+"$"+email;
    let today=new Date();
    let date=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(today.getDate());
    var _this=this;
    let object={subject:subject,first_name:f_name,last_name:l_name,email:email,tel:tel,message:message,country:country,date:date,id:notification_id,view:false};
    this._db.firestore.collection('customer_message').doc(notification_id).set(object).then(doc=>{
      console.log("Success");
      _this.form.reset();
    }).catch(err=>{
      console.log(err)
    })
  }

}
