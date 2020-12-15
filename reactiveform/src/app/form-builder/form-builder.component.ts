import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { BuildformService } from '../services/form-validation.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    public _formservice: BuildformService) { }

  //a form builder is a cleaner way to build formgroups he have 3 fcts (group, control, array)
  //all formgroup fcts apply also on form builder
  userForm = this._fb.group({
    firstName: ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    email:['', [Validators.required, this._formservice.emailValidator]],
    address: this._fb.group({
      city: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', Validators.required],
    }),
    agreeterms: ['', Validators.required],
  });
  
  ngOnInit(): void {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
  }
  edit(){
    console.log(this.userForm.value);
    //difference between setvalue and patch value is that
    //setvalue is for changing all form controls with in a formgroup
    //patchvalue is for changing just the selected form controlls in the formgroupÒ
    this.userForm.patchValue({
      firstName: 'Saad',
      address: {
        city: 'Casablanca',
        country:'Morocco'
      }
    });
  }
  hasError(field, subformgrp?){
    return this._formservice.hasError(this.userForm, field, subformgrp)
  }
  ErrorDisplayer(field, validatorValue?){
    let errorMsg;
    let errorObject = field in this.userForm.controls ? this.userForm.controls[field].errors : this.userForm['controls'].address['controls'][field].errors
    if(errorObject){
      Object.keys(errorObject).forEach(key => {
        errorMsg = this._formservice.getValidatorErrorMessage(key, validatorValue);
      });
      return errorMsg
    }else{
      return null
    }
  }
  //get accessor to get the formbuilder nested inside another one and to avoid Property 'controls' does not exist on type 'AbstractControl'. error
  //['controls'] also work
  get address() {
    return this.userForm.get('address') as FormArray;
  }

}
