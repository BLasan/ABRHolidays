import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validNumber } from '../../../services/valid_number.service';
import { country_array} from '../../../../scripts/frontend/load_country'
import { AngularFirestore } from '@angular/fire/firestore';
import { SendMailService } from '../../../services/send_mail.service';
import { MatSnackBar } from '@angular/material';
import { adjust_mobile_view_contact_us} from '../../../../scripts/frontend/mobile_view';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @Input() subject:string;
  @Input() type:string;
  form:any;
  country_array_list:any=[];
  data:any;
  constructor(private _db:AngularFirestore,private service:SendMailService,private _snackbar:MatSnackBar) { }

  ngOnInit() {
    adjust_mobile_view_contact_us();
    if(this.type==='destinations'){
      let destinations="Destination =>"+this.subject;
      this.form=new FormGroup({
        subject:new FormControl(destinations,Validators.required),
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
    }
    else if(this.type==='transfers'){
      this.form=new FormGroup({
        subject:new FormControl(this.subject,Validators.required),
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
    }


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
      to: 'abrceylon@gmail.com',
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

  // send_email(){
  //   this.service.loadAllUsers().subscribe(()=>{
  //     console.log("Success")
  //   });
  //  //send_mail();
  // }

  //     to: 'developerbenura@gmail.com.com',
  //     from: 'benuraab@gmail.com.com',
  //     subject: 'Sending with Twilio SendGrid is Fun',
  //     text: 'and easy to do anywhere, even with Node.js',
  //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  //   };
  //   sgMail.send(msg); 
  // }

  // parseBody(body){
  //   var helper=sgMail.mail;
  //   var from=new helper.Email(body.from);
  //   var to=new helper.Email(body.to);
  //   var subject=body.subject;
  //   var content=new helper.Content('text/html',body.content);
  //   var mail=new helper.Mail(from,subject,to,content);
  //   return mail.toJSON();
  // }

}
