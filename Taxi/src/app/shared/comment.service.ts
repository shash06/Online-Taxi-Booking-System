import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  formData : Comment;
  list : Comment[];
  readonly rootURL="https://localhost:44306/api"

  constructor(public http:HttpClient) { }

  postComment(formData:Comment){
    return this.http.post(this.rootURL+'/Comments',formData);

  }

  refreshList(){
    this.http.get(this.rootURL+'/Comments')
    .toPromise().then(res=>this.list=res as Comment[]);
  }

  putComment(formData:Comment){
    return this.http.put(this.rootURL+'/Comments/'+formData.Comment_ID,formData);

  }

  deleteComment(id:number){
    return this.http.delete(this.rootURL+'/Comments/'+id);
  }
}



