import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  constructor() { }

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      country: new FormControl(''),
      zipcode: new FormControl('')
    }),
    agreeterms: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
  }
  edit(){
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

}
