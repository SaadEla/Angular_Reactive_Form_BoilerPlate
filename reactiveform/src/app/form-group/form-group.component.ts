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
    city: new FormControl(''),
    country: new FormControl(''),
    zipcode: new FormControl(''),
    agreeterms: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
  }

}
