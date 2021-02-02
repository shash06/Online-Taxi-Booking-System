import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from 'src/app/shared/booking.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  constructor(public service : BookingService,
    public toastr:ToastrService) { }

    ngOnInit(){
      this.resetForm();
    }
  
    resetForm(form?:NgForm){
      if(form!=null)
    form.resetForm(); 
    this.service.formData={
      Employee_ID:null,
      Customer_ID:null,
      Booking_ID:null,
      Booking_Date :null,
      Booking_Time :null,
           Pickup_Location:'',
           Drop_Location:'',
           Fare:null,
           Vehicle_Type:''
  
    }
    }
  
    OnSubmit(form:NgForm){
      if(form.value.Cust==null)
      this.insertRecord(form);
      else
      this.updateRecord(form);
    }
  
    
  
    insertRecord(form:NgForm){
      this.service.postBooking(form.value).subscribe(res=>{
        this.toastr.success('Inserted Successfully','EMP. Register');
        this.resetForm(form);
        this.service.refreshList();
      });
    }
  
    updateRecord(form:NgForm){
      this.service.putBooking(form.value).subscribe(res=>{
        this.toastr.info('Updated Successfully','EMP. Register');
        this.resetForm(form);
        this.service.refreshList();
      });

      
    }
    /*getFare(lbl,form:NgForm){
      document.getElementById(lbl).innerHTML=this.service.calculateFare(form.value.Pickup_Location,form.value.Drop_Location,form.value.Vehicle_Type);
    }*/

  }
