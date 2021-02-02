import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(public service:CustomerService,
    private toastr:ToastrService) { }

    ngOnInit() {
      this.service.refreshList();
    }
  
    populateForm(emp: Customer) {
      this.service.formData = Object.assign({}, emp);
    }
  
    onDelete(id:number){
      if(confirm('Are you sure to delete this record?')){
      this.service.deleteCustomer(id).subscribe(res=>{
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully','EMP. Register');
      });
    }
    }
  }
  
