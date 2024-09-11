import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/alert.service';
import { ApplicationService } from 'src/app/shared/application.service';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.scss']
})
export class DonorRegistrationComponent {
  donorForm: FormGroup;

  stateList: any[] =[];
  selectedStateId:any='';
  filteredOptions: any[] = [];
  selectedOption: any | null = null;
  searchTerm: any = '';

  cityList:any=[];
  searchCity:any='';
  filteredCityOptions: any[] = [];
  selectedCityOption: any | null = null;

  constructor(
    private fb: FormBuilder,
    private bloodDonorService: ApplicationService,
    private router:Router,
    private alert:AlertService
  ) {
    this.donorForm = this.fb.group({
      name: [''],
      blood_type: [''],
      state: [''],
      city:[''],
      contact_info: [''],
      age: [''],
      last_donation_date: ['']
    });
  }

  ngOnInit(){
    this.bloodDonorService.fetchState((res:any)=>{
      if(res.status == 200){
        this.stateList = res.data;
      }
    })
  }

  onSearchChange(event: any): void {
    this.searchTerm = event.target.value;
    this.filteredOptions = this.stateList.filter((option:any) =>
      option.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSelect(option: any) {
    this.selectedOption = option.name;
    this.selectedStateId= option.state_id;
    this.searchTerm = option.name;
    this.filteredOptions = [];
    this.bloodDonorService.fetchCity(this.selectedStateId,(res:any)=>{
      if(res.status == 200){
        this.cityList = res.data;
      }
    })
  }

  clearSelection(): void {
    this.selectedOption = null;
    this.searchTerm = '';

    this.selectedCityOption = null;
    this.searchCity= '';
    this.filteredCityOptions = [];
  }

  onSearchCityChange(event: any): void {
    this.searchCity = event.target.value;
    this.filteredCityOptions = this.cityList.filter((option:any) =>
      option.name.toLowerCase().includes(this.searchCity.toLowerCase())
    );
  }

  onCitySelect(option: any) {
    this.selectedCityOption = option.name;
    this.searchCity = option.name;
    this.filteredCityOptions = [];
  }
  
  onSubmit() {
    this.donorForm.controls['state'].setValue(this.selectedOption);
    this.donorForm.controls['city'].setValue(this.selectedCityOption);
    this.bloodDonorService.registerDonor(this.donorForm.value,(res:any)=>{
      if(res.status == 200){
        this.alert.alert("success","Donor registered","Success",{ displayDuration: 2000, pos: 'top' });
        this.donorForm.reset();
        this.router.navigate(['/']);
      }else{
        this.alert.alert("error",res.message,"Error",{ displayDuration: 2000, pos: 'top' });
      }
    }) 
  }
}
