import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaxiService } from '../shared/taxi.service';

@Component({
  selector: 'app-taxis',
  templateUrl: './taxis.component.html',
  styleUrls: ['./taxis.component.css']
})
export class TaxisComponent implements OnInit {

  constructor(public taxiService:TaxiService,private router:Router) { }

  ngOnInit(): void {
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
