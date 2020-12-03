import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';

const routes: Routes = [
  {
    path: 'formcontrol',
    component: FormControlComponent,
  },
  {
    path: 'formgroup',
    component: FormGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
