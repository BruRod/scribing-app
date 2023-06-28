import { Component } from '@angular/core';
import {Post} from '../post';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  
  
  constructor(
    private postService: PostsService
  ) {}
}
