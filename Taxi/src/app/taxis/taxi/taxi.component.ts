import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { TaxiService } from 'src/app/shared/taxi.service';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.css']
})
export class TaxiComponent implements OnInit {

  constructor(public service : TaxiService,
    public toastr:ToastrService) { }

    ngOnInit() {
      this.resetForm();
    }
  
    resetForm(form?:NgForm){
      if(form!=null)
    form.resetForm(); 
    this.service.formData={
      Vehicle_ID :null,
      Vehicle_Type:'',
      Vehicle_Model :'',
      Vehicle_Number :''
  
    }
  }
  OnSubmit(form:NgForm){
    if(form.value.Vehicle_ID==null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postTaxi(form.value).subscribe(res=>{
      this.toastr.success('Inserted Successfully','Taxi Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form:NgForm){
    this.service.putTaxi(form.value).subscribe(res=>{
      this.toastr.info('Updated Successfully','Taxi Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}