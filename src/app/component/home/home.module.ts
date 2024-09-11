import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BloodDonationInfoComponent } from '../blood-donation-info/blood-donation-info.component';


@NgModule({
  declarations: [HomeComponent,BloodDonationInfoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
    
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
