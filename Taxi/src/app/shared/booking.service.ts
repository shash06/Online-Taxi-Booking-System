import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  formData : Booking;
  list : Booking[];
  /*number:Booking["Fare"];*/
  readonly rootURL="https://localhost:44306/api"


  constructor(public http:HttpClient) { }

  postBooking(formData:Booking){
    return this.http.post(this.rootURL+'/Bookings',formData);

  }

  refreshList(){
    this.http.get(this.rootURL+'/Bookings')
    .toPromise().then(res=>this.list=res as Booking[]);
  }

  putBooking(formData:Booking){
    return this.http.put(this.rootURL+'/Bookings/'+formData.Booking_ID,formData);

  }

  deleteBooking(id:number){
    return this.http.delete(this.rootURL+'/Bookings/'+id);
  }

  /*calculateFare(location1:string,location2:string,vtype:string){
    this.http.get(this.rootURL+'/Bookings/').toPromise().then(res=>this.number=res as Booking["Fare"]);
  }*/
}


