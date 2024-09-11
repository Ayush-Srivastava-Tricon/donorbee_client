import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonorRegistrationRoutingModule } from './donor-registration-routing.module';
import { DonorRegistrationComponent } from './donor-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DonorRegistrationComponent],
  imports: [
    CommonModule,
    DonorRegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[DonorRegistrationComponent]
})
export class DonorRegistrationModule { }
