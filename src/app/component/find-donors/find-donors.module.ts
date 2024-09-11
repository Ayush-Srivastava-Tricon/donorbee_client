import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindDonorsRoutingModule } from './find-donors-routing.module';
import { FindDonorsComponent } from './find-donors.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FindDonorsComponent],
  imports: [
    CommonModule,
    FindDonorsRoutingModule,
    FormsModule
  ],
  exports:[FindDonorsComponent]
})
export class FindDonorsModule { }
