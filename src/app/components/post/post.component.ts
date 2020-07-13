import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/classes/post';
import { Router } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';

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
    private router: Router
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

  public viewPost(post: any) {

    let postId;
    postId = post.id;
    this.router.navigate(['/posts',postId]);
  }
}
