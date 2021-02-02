import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(public bookingService:BookingService,private router:Router) { }

  ngOnInit():void{
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}