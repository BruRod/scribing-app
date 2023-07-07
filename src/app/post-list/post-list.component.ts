import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import {Post} from '../post';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnChanges{

  posts: Post[] = [];
  @Input() selectedDate?: Date | null;
  dateString: string = "";

  constructor(private postService: PostsService) {}


  getposts(): void {
    this.postService.getPosts()
        .subscribe(post => this.posts = post);
  }

  getpostsByDate(): void {
    this.postService.getPostsByDate(this.dateString)
        .subscribe(post => this.posts = post);
  }
 
  ngOnInit(): void {
    this.updateDateString();
    this.getposts();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateDateString();
    this.getpostsByDate()
  }

  updateDateString(): void{
    this.dateString = String(this.selectedDate?.toLocaleDateString());
  }
}

