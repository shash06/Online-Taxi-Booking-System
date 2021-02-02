import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/shared/comment.service';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  employeeList:Employee[]

  constructor(public service : CommentService,public employeeservice:EmployeeService,
    public toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    /*this.employeeservice.refreshList().then(res=>this.employeeList=res as Employee[]);*/
  }

  resetForm(form?:NgForm){
    if(form!=null)
  form.resetForm(); 
  this.service.formData={
    Comment_ID:null,
    Customer_ID :null,
    Employee_ID :null,
    Feedback:'',
    Comment1:''

  }
  }

  OnSubmit(form:NgForm){
    if(form.value.Comment_ID==null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  

  insertRecord(form:NgForm){
    this.service.postComment(form.value).subscribe(res=>{
      this.toastr.success('Inserted Successfully','EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form:NgForm){
    this.service.putComment(form.value).subscribe(res=>{
      this.toastr.info('Updated Successfully','EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}



