import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(public customerService:CustomerService,private router:Router) { }

  ngOnInit():void{
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}

