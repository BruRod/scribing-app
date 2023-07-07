
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostDetailsComponent} from './post-details/post-details.component';

const routes: Routes = [
  { path: 'detail/:id', component: PostDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
