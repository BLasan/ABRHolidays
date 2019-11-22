import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {confirmPassword,} from '../../../services/confirm_password.service';
import { AngularFirestore } from '@angular/fire/firestore';
import CryptoJS from 'crypto-js';
import { enable_search_bar,disable_search_bar} from '../../../../scripts/frontend/disable_enable_search_bar.js';
import { check_old_password } from '../../../services/check_old_password.service';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  form:any;
  form1:any;
  isLoaded:boolean=false;
  admin_user_name:string;
  admin_password:any;
  constructor(private _db:AngularFirestore,private _snackbar:MatSnackBar,private auth:AngularFireAuth,private router:Router) { }

  ngOnInit() {
    this.load_old_password();
    disable_search_bar();
  }

  reset_password(){
    var _this=this;
   // var password_hash=require('password-hash');
    let email=(<HTMLInputElement>document.getElementById('new_user_name')).value;
    let password=(<HTMLInputElement>document.getElementById('new_password')).value;
    var hash= CryptoJS.SHA256(password).toString();
    console.log(hash);
    let docs={user_email:this.admin_user_name,password:hash,active:true};
    this._db.collection('admin').doc(email).set(docs).then(function(docs){
      console.log("Done");
      _this._db.collection('admin').doc(_this.admin_user_name).update({active:false});
      _this.admin_user_name=email;
      (<HTMLInputElement>document.getElementById('old_password')).value="";
      (<HTMLInputElement>document.getElementById('new_password')).value="";
      (<HTMLInputElement>document.getElementById('re_enter_password')).value="";
      _this.changeCredentials(email,hash);
      _this._snackbar.open('Successfully Updated!','OK',{
        duration:300
      })
    }).catch(function(error){
      console.log(error);
      _this._snackbar.open('Not Updated!','OK',{
        duration:300
      })
    });
    // this.auth.auth.currentUser.updatePassword(hash);
    // this.auth.auth.currentUser.updateEmail(email);
  }

  load_old_password(){
    var _this=this;
    this._db.firestore.collection('admin').get().then(snapshot=>{
      if(snapshot.empty) console.log("Empty Admin");
      else{
        snapshot.forEach(doc=>{
          if(doc.data().active===true){
            _this.admin_user_name=doc.data().user_email;
            _this.admin_password=doc.data().password;
            console.log(_this.admin_password);

            _this.form=new FormGroup({
              new_user_name:new FormControl('',[Validators.required,Validators.email]),
              old_password:new FormControl('',[Validators.required,check_old_password(_this.admin_password)]),
              new_password:new FormControl('',[Validators.required,Validators.minLength(6)]),
              re_enter_password:new FormControl('',[Validators.required,confirmPassword('new_password')])
            });

            // _this.form1=new FormGroup({
            //   old_password1:new FormControl('',[Validators.required,check_old_password(_this.admin_password)]),
            //   new_user_name:new FormControl('',[Validators.required,Validators.email])
            // });

            _this.isLoaded=true;
          }
        })
      }
    })
  }

  // reset_email(){
  //   var _this=this;
  //   let old_password1=(<HTMLInputElement>document.getElementById('old_password1')).value;
  //   let email=(<HTMLInputElement>document.getElementById('new_user_name')).value;
  //   let docs={user_email:email,password:old_password1,active:true};
  //   if(email===this.admin_user_name){
  //     alert('Same User Email');
  //     (<HTMLInputElement>document.getElementById('old_password1')).value="";
  //     (<HTMLInputElement>document.getElementById('new_user_name')).value="";
  //   }
  //   else{

  //     this._db.collection('admin').doc(email).set(docs).then(function(docs){
  //       console.log("Done");
  //       (<HTMLInputElement>document.getElementById('old_password1')).value="";
  //       (<HTMLInputElement>document.getElementById('new_user_name')).value="";
  //       // alert('Successfully changed');
  //       _this._db.collection('admin').doc(_this.admin_user_name).update({active:false});
  //       _this.admin_user_name=email;
  //       _this._snackbar.open('Successfully Updated!','OK',{
  //         duration:300
  //       })
        
  //     }).catch(function(error){
  //       console.log(error);
  //       _this._snackbar.open('Not Updated!','OK',{
  //         duration:300
  //       });
  //     });
  //     this.auth.auth.currentUser.updateEmail(email);
  //   }
  
  // }


  changeCredentials(email,hash){
    var _this=this;
    this.auth.auth.currentUser.updateEmail(email).then(()=>{
      _this.auth.auth.currentUser.updatePassword(hash).then(()=>{
        _this.auth.auth.signOut();
        _this.router.navigate(['/login']);
      }).catch(err=>{
        console.log(err);
      })
    }).catch(err=>{
      console.log(err);
    })
  
    this.auth.auth.currentUser.updateProfile({displayName:'Ravindu'});
    console.log(this.auth.auth.currentUser);
    // this.auth.auth.signInWithEmailAndPassword(email,hash).then(value=>{
    //   console.log(value.user.displayName)
    // }).catch(err=>{
    //   console.log(err);
    // });
  }



}
