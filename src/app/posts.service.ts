import { Injectable } from '@angular/core';

import { Post } from './post';
import { ListOfPosts } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Post[] {
    return ListOfPosts;
  }
}
