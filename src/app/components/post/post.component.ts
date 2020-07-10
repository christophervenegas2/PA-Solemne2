import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { CommentsService } from 'src/app/services/comments.service';
import { Post } from 'src/app/classes/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public posts: Post[];
  public userId: number;

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService
  ) { }

  public ngOnInit() {
    
    this.postsService.getAllPosts().then((data:Post[]) => {
      this.posts = data;
    });
  }

  public postByUser() {
    this.postsService.getPostByUser(Number(this.userId)).then((data:Post[])=> {
      this.posts = data;
    });
  }
}
