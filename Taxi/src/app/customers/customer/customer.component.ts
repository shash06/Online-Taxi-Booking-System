import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/shared/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public service : CustomerService,
    public toastr:ToastrService) { }

  ngOnInit(){
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
  form.resetForm(); 
  this.service.formData={
    Customer_Name:null,
    Customer_ID:null,
    Email_ID :'',
    Phone_No :'',
         Gender:'',
         DOB:null,
         Address:'',
         Password:''

  }
  }

  OnSubmit(form:NgForm){
    if(form.value.Cust==null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  

  insertRecord(form:NgForm){
    this.service.postCustomer(form.value).subscribe(res=>{
      this.toastr.success('Inserted Successfully','EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form:NgForm){
    this.service.putCustomer(form.value).subscribe(res=>{
      this.toastr.info('Updated Successfully','EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}


