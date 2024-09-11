import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  httpUrl:any={
    'register':'/api/register',
    'find':'/api/find'
  }

  constructor(private http:HttpClient) { }

  getData(d:any,url:any,callback:any){
    return this.http.get(url).subscribe((data:any)=>callback(<any>data));
  }
  
  postData(d:any,url:any,callback:any){
    return this.http.post(url,d).subscribe((data:any)=>callback(<any>data));
  }

}
