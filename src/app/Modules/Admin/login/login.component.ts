import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import CryptoJS from 'crypto-js';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { async } from '@angular/core/testing';
import { redirect_to_admin,warning_message} from '../../../../scripts/frontend/redirect_to_dashboard';
import { AngularFireAuth } from '@angular/fire/auth';
import { SendMailService } from '../../../services/send_mail.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:any;
  login_success:any;
  data:any;
  session:boolean=false;
  constructor(private _db:AngularFirestore,private _auth:AngularFireAuth,private service:SendMailService) { }

  ngOnInit() {
    if(localStorage.getItem('session')==='timeout') this.session=true;
    // this.form=new FormGroup({
    //   user_name:new FormControl('',[Validators.required,Validators.email]),
    //   user_password:new FormControl('',[Validators.required])
    // })
  }

  submit_form(){
    let email=(<HTMLInputElement>document.getElementById('user_name')).value;
    let password=(<HTMLInputElement>document.getElementById('user_password')).value;
    var hash= CryptoJS.SHA256(password).toString();
    // console.log(hash);
    var _this=this;
    var docRef=this._db.firestore.collection('admin').doc(email)
    docRef.get().then(async function(doc){
      // console.log(doc.data().password===hash && doc.data().active)
      if(doc.data().password==hash){
        // console.log("Hello")
        localStorage.setItem('login','true');
        if(_this.session===true)
        localStorage.removeItem('session')
        _this._auth.auth.signInWithEmailAndPassword(email,hash).then(value=>{
          // alert(value.user.metadata.lastSignInTime);
          const message="Last Login : "+value.user.metadata.lastSignInTime;
          const email_message={
            to: 'benuraab@gmail.com',
            from: 'developerbenura@gmail.com',
            subject: 'User Login monitored',
            text: message,
            html: '<strong>'+message+'</strong>'+'<p>'+"Take necessary actions if this is not you."+'</p>',
          }
         
          _this.service.sendEmail(email_message).subscribe(data=>{
            _this.data=data;
            // console.log(_this.data.success)
            if(_this.data.success)
            redirect_to_admin();
            else
            alert('Notification Sending Failed!')
          });
    
        }).catch(err=>{
          alert(err);
          // console.log(err);
        });
      }
      else{
        warning_message();
      }
    }).catch(function(error){
      warning_message();
      alert("Error");
      // console.log(error);
    });
  }

}
