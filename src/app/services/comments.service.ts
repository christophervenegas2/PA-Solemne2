import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  public uri = 'https://jsonplaceholder.typicode.com/comments';
  public filterByPost = '?postId=';

  constructor(private http: HttpClient) { }

  public async getAllComments(): Promise<Comment[]> {
    return new Promise<Comment[]>((resolve, reject) => {
      this.http.get(`${this.uri}`).subscribe((data: any) => {
        resolve(data.map(value =>  new Comment(value)));
      });
    });
  }

  public async getCommentByPost(postId: number): Promise<Comment[]> {
    return new Promise<Comment[]>((resolve, reject) => {
      this.http.get(`${this.uri}${this.filterByPost}${postId}`).subscribe((data: any) => {
        resolve(data.map(value => new Comment(value)));
      });
    });
  }

  public async createComment(comment: Comment): Promise<Comment> {
    return new Promise<Comment>((resolve, reject) => {
      this.http.post(this.uri, comment).subscribe((data: any) => {
        comment.id = data.id;
        resolve(comment);
      });
    });
  }

  public async deleteComment(commentId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(`${this.uri}/${commentId}`).subscribe((data: any) => {
        resolve();
      });
    });
  }
}
