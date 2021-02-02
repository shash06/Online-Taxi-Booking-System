import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Taxi } from './taxi.model';

@Injectable({
  providedIn: 'root'
})
export class TaxiService {
  formData : Taxi;
  list : Taxi[];
  readonly rootURL="https://localhost:44306/api"

  constructor(public http:HttpClient) { }

  postTaxi(formData:Taxi){
    return this.http.post(this.rootURL+'/Taxis',formData);

  }

  refreshList(){
    this.http.get(this.rootURL+'/Taxis')
    .toPromise().then(res=>this.list=res as Taxi[]);
  }

  putTaxi(formData:Taxi){
    return this.http.put(this.rootURL+'/Taxis/'+formData.Vehicle_ID,formData);

  }

  deleteTaxi(id:number){
    return this.http.delete(this.rootURL+'/Taxis/'+id);
  }
}

