import { Component, OnInit } from '@angular/core';
import { EmployeerosterService } from 'src/app/shared/employeeroster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeerosters',
  templateUrl: './employeerosters.component.html',
  styleUrls: ['./employeerosters.component.css']
})
export class EmployeerostersComponent implements OnInit {
  

  constructor(public userrosterService:EmployeerosterService,private router:Router) { }

  ngOnInit() {
    
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  

  }