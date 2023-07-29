import { Component, OnInit } from '@angular/core';

import {PostListComponent} from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'scribing-app';
  selectedDate: Date | undefined;
  
  constructor() { }
  
  public deleteDate(): void {
    this.selectedDate = undefined;
  }

}

