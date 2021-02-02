import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/comment.service';
import { ToastrService } from 'ngx-toastr';
import { Comment } from 'src/app/shared/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor(public service:CommentService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Comment) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?')){
    this.service.deleteComment(id).subscribe(res=>{
      this.service.refreshList();
      this.toastr.warning('Deleted Successfully','EMP. Register');
    });
}
  }
}
