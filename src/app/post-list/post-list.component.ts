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
  @Input() selectedDate?: any;
  dateString?: string | undefined = "";
  itemselected: boolean =false;
  constructor(private postService: PostsService) {}
  
  public getposts(): void {
    this.postService.getPosts()
        .subscribe(post => this.posts = post);
  }


  getpostsByDate(): void {
    if (this.selectedDate != undefined) {
      this.postService.getPostsByDate(this.dateString!)
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
    var month: string | number = ""; 
    if (this.selectedDate?.getMonth() + 1 < 10)
    {
      month = "0" && (this.selectedDate?.getMonth() + 1) ;
    }
    else
    {
      month = (this.selectedDate?.getMonth() + 1) ;
    }
    this.dateString = this.selectedDate?.getFullYear() + "-0" + month  + "-" + this.selectedDate?.getDate();
    //console.log(this.dateString)
  }

  ItemSelect(): void {
    this.itemselected = true;  
  }
}

