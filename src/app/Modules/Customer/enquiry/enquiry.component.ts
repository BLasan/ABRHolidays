import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SendMailService } from '../../../services/send_mail.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { country_array} from '../../../../scripts/frontend/load_country'
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  form:any;
  country_array_list:any=[];
  data:any;
  constructor(private _db:AngularFirestore,private service:SendMailService,private _snackbar:MatSnackBar) { }

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
    var _this=this;
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
    const email_message={
      to: 'benuraab@gmail.com',
      from: email,
      subject: subject,
      text: message,
      html: '<strong>'+message+'</strong>',
    }
    let object={subject:subject,first_name:f_name,last_name:l_name,email:email,tel:tel,message:message,country:country,date:date,id:notification_id,view:false};
    this._db.firestore.collection('customer_message').doc(notification_id).set(object).then(doc=>{
      // console.log("Success");
      _this.service.sendEmail(email_message).subscribe((data)=>{
        _this.data=data;
        if(_this.data.success){
          _this._snackbar.open("Successfully Sent!","OK",{
            duration:300
          });
        }
        else
        _this._snackbar.open("Error Sending.Please retry!","OK",{
          duration:300
        });
      });
      _this.form.reset();
    }).catch(err=>{
      alert("Error");
      // console.log(err)
    })
  }


}
