import { Component } from '@angular/core';

import {Post} from '../post';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts: Post[] = [];

  constructor(private postService: PostsService) {}

  
  getposts(): void {
    this.postService.getPosts()
        .subscribe(post => this.posts = post);
  }

  ngOnInit(): void {
    this.getposts();
  }
}

