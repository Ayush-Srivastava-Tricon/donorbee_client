import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindDonorsComponent } from './find-donors.component';

const routes: Routes = [
  {
    path:'',
    component:FindDonorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindDonorsRoutingModule { }
