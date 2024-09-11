import { Component } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';
import { ApplicationService } from 'src/app/shared/application.service';

@Component({
  selector: 'app-find-donors',
  templateUrl: './find-donors.component.html',
  styleUrls: ['./find-donors.component.scss']
})
export class FindDonorsComponent {
  bloodType: string = '';
  donors: any[] = [];

  stateList: any[] =[];
  selectedStateId:any='';
  filteredOptions: any[] = [];
  selectedOption: any | null = null;
  searchTerm: any = '';

  cityList:any=[];
  searchCity:any='';
  filteredCityOptions: any[] = [];
  selectedCityOption: any | null = null;

  constructor(private bloodDonorService: ApplicationService,private alert:AlertService) {}

  ngOnInit(){
    this.bloodDonorService.fetchState((res:any)=>{
      if(res.status == 200){
        this.stateList = res.data;
      }
    })
  }

  searchDonors() {
    let params:any={
      city:this.selectedCityOption,
      state:this.selectedOption,
      bloodType:this.bloodType
    };
    this.donors=[];

    this.bloodDonorService.findDonors(params,(res:any)=>{
      if(res.status == 200 && res.data.length>0){
        this.donors = res.data;
        this.alert.alert("success",res.message,"Success",{ displayDuration: 2000, pos: 'top' })
      }else{
        this.alert.alert("error","Sorry No donor found","Success",{ displayDuration: 2000, pos: 'top' })
      }
    })
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.filteredOptions = this.stateList.filter((option:any) =>
      option.name.toLowerCase().includes(search.toLowerCase())
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

  onSearchCityChange(search: string): void {
    this.searchCity = search;
    this.filteredCityOptions = this.cityList.filter((option:any) =>
      option.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  onCitySelect(option: any) {
    this.selectedCityOption = option.name;
    this.searchCity = option.name;
    this.filteredCityOptions = [];
    console.log(this.selectedCityOption);
    
  }

  getWhatsAppLink(donor: any): string {
    const message = `Hi ${donor.name}, there is an urgent need for ${donor.blood_type} blood in ${donor.city}, ${donor.state}. Can you help?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${donor.contact_info}?text=${encodedMessage}`;
  }

}
