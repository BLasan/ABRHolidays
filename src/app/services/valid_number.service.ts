import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import {Directive, Input} from '@angular/core';
import { Subscription } from 'rxjs';

export function validNumber():ValidatorFn{
    return (c:AbstractControl):ValidationErrors|null=>{
        if(c.value==null||c.value.length==0){
            return null;
        }

        console.log(c.value)
        const subscription:Subscription=c.valueChanges.subscribe((x)=>{
                console.log(x)
                c.updateValueAndValidity();
                subscription.unsubscribe();
            });

        return c.value.length>0?{'notequal':true}:null;
    }
}