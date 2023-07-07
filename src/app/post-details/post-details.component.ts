import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {PostsService} from '../posts.service';
import {Post} from '../post'; 

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent{

  post$!: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.getPost();
  }
  
  getPost(): void {
   // const id = Number(this.route.snapshot.paramMap.get('id'));
   // this.postsService.getPost(id)
   //   .subscribe(post => this.post = post);
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.postsService.getPost(Number(params.get('id')!))));
  }

  goBack(): void {
    this.location.back();
  }
}
