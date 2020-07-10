import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.scss']
})
export class PostIdComponent implements OnInit {

  constructor(
    private router: ActivatedRoute
    ) { 

    this.router.params.subscribe( params => {
      console.log(params['id']);
    });
  }

  ngOnInit() {
  }
}
