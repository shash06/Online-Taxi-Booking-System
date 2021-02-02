import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/shared/booking.service';
import { ToastrService } from 'ngx-toastr';
import { Booking } from 'src/app/shared/booking.model';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor(public service:BookingService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Booking) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id:number){
    if(confirm('Are you sire to delete this record?')){
    this.service.deleteBooking(id).subscribe(res=>{
      this.service.refreshList();
      this.toastr.warning('Deleted Successfully','EMP. Register');
    });
  }
  }
}
