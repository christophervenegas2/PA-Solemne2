import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { PostsService } from 'src/app/services/posts.service';
import { Comment } from '../../classes/comment';
import { Post } from '../../classes/post';


@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.scss']
})
export class PostIdComponent implements OnInit {
  public postId: number;
  public comments: Comment[];
  public allComments: Comment[];
  public post: Post[];

  constructor(
    private router: ActivatedRoute,
    private commentsService: CommentsService,
    private postsService: PostsService
    ) { 

    this.router.params.subscribe( params => {
      this.postId = (params['id']);
    });
  }

  ngOnInit() {

    this.commentsService.getAllComments().then((data: Comment[]) => {
      this.allComments = data;
    });

    this.commentsService.getCommentByPost(Number(this.postId)).then((data:Comment[]) => {
      this.comments = data;
      console.log(this.comments);
    });

    this.postsService.getPostById(Number(this.postId)).then((data) => {
      this.post = data;
      console.log(this.post);
    });
  }

  public boton(nombre: string, mail: string, cuerpo: string) {
    const comment = new Comment({
      postId: this.postId,
      name: nombre,
      email: mail,
      body: cuerpo
    });
    this.commentsService.createComment(comment).then((data: Comment) => {
      data.id = this.allComments.length + 1;
      this.allComments.push(data);
      this.comments.push(data);
      console.log(this.allComments);
    });
  }
}
