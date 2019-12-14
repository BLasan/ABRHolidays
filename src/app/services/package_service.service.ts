import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import {Directive, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import CryptoJS from 'crypto-js';

export function packageImage():ValidatorFn{
    return (c:AbstractControl):ValidationErrors|null=>{
        console.log(c.value)
        if(c.value==null||c.value.length==0){
            return {'notequal':true};
        }
        // const subscribe:Subscription=c.valueChanges.subscribe(x=>{
        //     console.log(x)
        //     c.updateValueAndValidity();
        //     subscribe.unsubscribe();
        // })
        
        return c.value!=null?null:{'notequal':true};
    }
}