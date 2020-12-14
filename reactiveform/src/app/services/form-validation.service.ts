import { ɵNullViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BuildformService {
  constructor(private _fb: FormBuilder) { }

  hasError(fbInstance, field, subformgrp?){
    if(field in fbInstance.controls){
      return fbInstance.controls[field].errors && (fbInstance.controls[field].dirty || fbInstance.controls[field].touched)
    }else{
      return fbInstance.controls[subformgrp].controls[field].errors && (fbInstance.controls[subformgrp].controls[field].dirty || fbInstance.controls[subformgrp].controls[field].touched)
    }
    
  }
  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: `${validatorValue} Required`,
      invalidEmailAddress: 'Invalid email address',
      invalidPassword:'Invalid password. Password must be at least 6 characters long, and contain a number.',
      minlength: `Minimum length ${validatorValue}`
    };

    return config[validatorName];
  }

  emailValidator(control){
    var re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(re.test(control.value)){
      return null
    }else{
      return { invalidEmailAddress: true };;
    }
  }
  passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };;
    }
  }
}
