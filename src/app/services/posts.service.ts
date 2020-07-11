import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public uri = 'https://jsonplaceholder.typicode.com/posts';
  public filterByUser = '?userId='

  constructor(private http: HttpClient) { }

  public async getAllPosts(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      this.http.get(`${this.uri}`).subscribe((data: any) => {
        resolve(data.map(value =>  new Post(value)));
      });
    });
  }

  public async getPostByUser(userId: number): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      this.http.get(`${this.uri}${this.filterByUser}${userId}`).subscribe((data: any) => {
        resolve(data.map(value => new Post(value)));
      });
    });
  }

  public async getPostById(postId: number): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
      this.http.get(`${this.uri}/${postId}`).subscribe((data: any) => {
        resolve(new Post(data));
      });
    });
  }
}
