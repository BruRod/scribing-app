import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Injectable } from '@angular/core';

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
  
  public getposts(): void {
    this.postService.getPosts()
        .subscribe(post => this.posts = post);
  }

  getpostsByDate(): void {
    if (this.selectedDate != undefined) {
      this.postService.getPostsByDate(this.dateString)
         .subscribe(post => this.posts = post);
    }
    else {
      this.getposts();
    }
  }
 
  ngOnInit(): void {
    this.getposts();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateDateString();
    this.getpostsByDate();
  }

  updateDateString(): void{
    this.dateString = String(this.selectedDate?.toLocaleDateString());
  }

  public refreshposts(){
    this.ngOnInit();
  }
}

