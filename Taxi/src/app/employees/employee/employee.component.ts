import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public service : EmployeeService,
    public toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
  form.resetForm(); 
  this.service.formData={
    Employee_ID:null,
    Employee_Name:'',
    Email_ID :'',
         Phone_No :'',
         Gender:'',
         DOB:null,
         Address:'',
         Password:''

  }
  }

  OnSubmit(form:NgForm){
    if(form.value.Employee_ID==null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  

  insertRecord(form:NgForm){
    this.service.postEmployee(form.value).subscribe(res=>{
      this.toastr.success('Inserted Successfully','EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form:NgForm){
    this.service.putEmployee(form.value).subscribe(res=>{
      this.toastr.info('Updated Successfully','EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}
