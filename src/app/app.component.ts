import { Component, OnInit } from '@angular/core';

import {MatCalendarCellCssClasses} from '@angular/material/datepicker';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'scribing-app';
  selectedDate: any;
  
  datesToHighlight: string[] |  number[] | Date[] = ["2023-07-20", "2023-07-21"];

  constructor(private postService: PostsService) { }
  
  ngOnInit(): void {
    this.getDatesFromPosts();
  }

  public deleteDate(): void {
    this.selectedDate = undefined;
  }
  

  public getDatesFromPosts(): void {
    this.postService.getDatesFromPosts()
        .subscribe(date => this.datesToHighlight = date);
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => new Date(strDate))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      
      return highlightDate ? 'special-date' : '';
    };
  }

}

