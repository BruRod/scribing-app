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

  getPost(id: Number): Observable<Post> {
    // For now, assume that a Post with the specified `id` always exists.
    // Error handling is missing
    const post = ListOfPosts.  find(h => h.id === id)!;
    return of(post);
  }

  getPostsByDate(date: string): Observable<Post[]> {
    // For now, assume that a Post with the specified `id` always exists.
    // Error handling is missing
    const posts = ListOfPosts.filter(h => h.date === date)!;
    return of(posts);
  }
}
