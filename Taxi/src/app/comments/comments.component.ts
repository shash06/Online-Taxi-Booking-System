import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from "../shared/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(public commentService:CommentService,private router:Router) { }

  ngOnInit():void{
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}

