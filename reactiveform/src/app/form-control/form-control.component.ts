import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  constructor(){}
  // for one input and add a directive in the input as [formControl]="name"
  public name = new FormControl('initial value');

  ngOnInit(): void {
  }

  edit(){
    this.name.setValue('edited value')
  }
  reset(){
    //Resets the form control, marking it pristine and untouched, and setting the value to null
    this.name.reset()
  }

}
