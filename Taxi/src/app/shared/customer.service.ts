import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formData : Customer;
  list : Customer[];
  readonly rootURL="https://localhost:44306/api"

  constructor(public http:HttpClient) { }

  postCustomer(formData:Customer){
    return this.http.post(this.rootURL+'/Customers',formData);

  }

  refreshList(){
    this.http.get(this.rootURL+'/Customers')
    .toPromise().then(res=>this.list=res as Customer[]);
  }

  putCustomer(formData:Customer){
    return this.http.put(this.rootURL+'/Customers/'+formData.Customer_ID,formData);

  }

  deleteCustomer(id:number){
    return this.http.delete(this.rootURL+'/Customers/'+id);
  }
}


