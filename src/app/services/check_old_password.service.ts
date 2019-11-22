import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import {Directive, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import CryptoJS from 'crypto-js';

export function check_old_password(check_hash:any):ValidatorFn{
    return (c:AbstractControl):ValidationErrors|null=>{
        if(c.value==null||c.value.length==0){
            return null;
        }

        var password_hash= CryptoJS.SHA256(c.value).toString();
        //console.log(check_hash===password_hash)
        // if(check_hash===password_hash){
        //     const subscription:Subscription=c.valueChanges.subscribe((x)=>{
        //         // console.log(x)
        //         c.updateValueAndValidity();
        //         subscription.unsubscribe();
        //     });
        // }
        return check_hash && check_hash!==password_hash?{'notequal':true}:null;
    }
}