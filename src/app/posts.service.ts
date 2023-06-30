import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from './post';
import { ListOfPosts } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    const posts = of(ListOfPosts);
    return posts;
  }
}
