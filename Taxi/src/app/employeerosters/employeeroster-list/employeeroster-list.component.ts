import { Component, OnInit } from '@angular/core';
import { EmployeerosterService } from 'src/app/shared/employeeroster.service';
import { ToastrService } from 'ngx-toastr';
import { Employeeroster } from 'src/app/shared/employeeroster.model';

@Component({
  selector: 'app-employeeroster-list',
  templateUrl: './employeeroster-list.component.html',
  styleUrls: ['./employeeroster-list.component.css']
})
export class EmployeerosterListComponent implements OnInit {

  constructor(public service:EmployeerosterService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Employeeroster) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id:number){
    if(confirm('Are you sire to delete this record?')){
    this.service.deleteEmployeeRoster(id).subscribe(res=>{
      this.service.refreshList();
      this.toastr.warning('Deleted Successfully','EMP. Register');
    });
  }
  }
}

