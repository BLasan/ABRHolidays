import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {confirmPassword} from '../../../services/confirm_password.service';
import { AngularFirestore } from '@angular/fire/firestore';
import CryptoJS from 'crypto-js';
import { enable_search_bar,disable_search_bar} from '../../../../scripts/frontend/disable_enable_search_bar.js';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  form:any;
  constructor(private _db:AngularFirestore) { }

  ngOnInit() {
    disable_search_bar();
    this.form=new FormGroup({
      new_password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      re_enter_password:new FormControl('',[Validators.required,confirmPassword('new_password')])
    })
  }

  reset_password(){
   // var password_hash=require('password-hash');
    let password=(<HTMLInputElement>document.getElementById('new_password')).value;
    var hash= CryptoJS.SHA256(password).toString();
    console.log(hash)
    let docs={user_email:'benuraab@gmail.com',password:hash};
    this._db.collection('admin').doc('benuraab@gmail.com').set(docs).then(function(docs){
      console.log("Done");
      (<HTMLInputElement>document.getElementById('new_password')).value="";
      (<HTMLInputElement>document.getElementById('re_enter_password')).value="";
    }).catch(function(error){
      console.log(error);
    })
  }



}
