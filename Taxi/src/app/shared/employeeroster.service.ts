import { Injectable } from '@angular/core';
import { Employeeroster } from './employeeroster.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeerosterService {
  formData : Employeeroster;
  list : Employeeroster[];
  readonly rootURL="https://localhost:44306/api"

  constructor(public http:HttpClient) { }

  postEmployeeRoster(formData:Employeeroster){
    return this.http.post(this.rootURL+'/EmployeeRosters',formData);

  }

  refreshList(){
    this.http.get(this.rootURL+'/EmployeeRosters')
    .toPromise().then(res=>this.list=res as Employeeroster[]);
  }

  putEmployeeRoster(formData:Employeeroster){
    return this.http.put(this.rootURL+'/EmployeeRosters/'+formData.Roster_ID,formData);

  }

  deleteEmployeeRoster(id:number){
    return this.http.delete(this.rootURL+'/EmployeeRosters/'+id);
  }
}


