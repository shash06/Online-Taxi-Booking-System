import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeerosterService } from 'src/app/shared/employeeroster.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeeroster',
  templateUrl: './employeeroster.component.html',
  styleUrls: ['./employeeroster.component.css']
})
export class EmployeerosterComponent implements OnInit {

  constructor(public service : EmployeerosterService,
    public toastr:ToastrService) { }

  ngOnInit(): void {
  }

  resetForm(form?:NgForm){
    if(form!=null)
  form.resetForm(); 
  this.service.formData={
    Employee_ID:null,
    Roster_ID:null,
    From_Date :null,
    To_Date :null,
    In_Time :null,
    Out_Time :null

  }
  }
  OnSubmit(form:NgForm){
    if(form.value.Roster_ID==null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postEmployeeRoster(form.value).subscribe(res=>{
      this.toastr.success('Inserted Successfully','EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form:NgForm){
    this.service.postEmployeeRoster(form.value).subscribe(res=>{
      this.toastr.info('Updated Successfully','EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }}

