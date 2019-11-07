import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import CryptoJS from 'crypto-js';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { async } from '@angular/core/testing';
import { redirect_to_admin,warning_message} from '../../../../scripts/frontend/redirect_to_dashboard';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:any;
  login_success:any;
  constructor(private _db:AngularFirestore) { }

  ngOnInit() {
    // this.form=new FormGroup({
    //   user_name:new FormControl('',[Validators.required,Validators.email]),
    //   user_password:new FormControl('',[Validators.required])
    // })
  }

  submit_form(){
    let email=(<HTMLInputElement>document.getElementById('user_name')).value;
    let password=(<HTMLInputElement>document.getElementById('user_password')).value;
    var hash= CryptoJS.SHA256(password).toString();
    console.log(hash)
    var docRef=this._db.firestore.collection('admin').doc(email)
    docRef.get().then(async function(doc){
      if(doc.data().password==hash){
        localStorage.setItem('login','true');
        redirect_to_admin();
      }
      else{
        warning_message();
      }
    }).catch(function(error){
      warning_message();
      console.log(error);
    })
  }

}
