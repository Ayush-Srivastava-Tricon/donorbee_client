import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends BaseService {

  url:any = environment.baseUrl;

  constructor(http:HttpClient) {
    super(http);
   }

   registerDonor(params: any,callback:any) {
    this.postData(params,this.url+this.httpUrl['register'],callback);
  }
  
  findDonors(params:any,callback:any) {
    this.postData(params,this.url+this.httpUrl['find'],callback);
  }

  fetchState(callback:any){
    const url:any = 'https://www.e2xinfotech.com/hotelapi/state?country_id=105';
    this.getData({},url,callback); 
  }
  
  fetchCity(state_id:any,callback:any){
    const url:any = 'https://www.e2xinfotech.com/hotelapi/city?country_id=105';
    this.getData({},`${url}&state_id=${state_id}`,callback) 
  }
}
