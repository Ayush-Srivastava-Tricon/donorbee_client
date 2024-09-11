import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorRegistrationComponent } from './donor-registration.component';

const routes: Routes = [
  {
    path:'',
    component:DonorRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorRegistrationRoutingModule { }
