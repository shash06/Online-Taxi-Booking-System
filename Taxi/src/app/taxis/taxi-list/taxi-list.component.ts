import { Component, OnInit } from '@angular/core';
import { TaxiService } from 'src/app/shared/taxi.service';
import { ToastrService } from 'ngx-toastr';
import { Taxi } from 'src/app/shared/taxi.model';

@Component({
  selector: 'app-taxi-list',
  templateUrl: './taxi-list.component.html',
  styleUrls: ['./taxi-list.component.css']
})
export class TaxiListComponent implements OnInit {

  constructor(public service:TaxiService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Taxi) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?')){
    this.service.deleteTaxi(id).subscribe(res=>{
      this.service.refreshList();
      this.toastr.warning('Deleted Successfully','EMP. Register');
    });
}
  }
}
