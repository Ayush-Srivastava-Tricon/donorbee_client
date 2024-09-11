import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import("./component/home/home.module").then(m=>m.HomeModule)
  },
  {
    path:'find-donors',
    loadChildren:()=>import("./component/find-donors/find-donors.module").then(m=>m.FindDonorsModule)
  },
  {
    path:'register-donor',
    loadChildren:()=>import("./component/donor-registration/donor-registration.module").then(m=>m.DonorRegistrationModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
