import { Component, OnInit } from '@angular/core';
import { DataService }  from '../../services/data.service';
 
import { Post } from '../../models/post';
 
@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  posts:Post[];
 
  constructor(private ds:DataService) {
   
   }
 
  ngOnInit() {
      this.ds.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }
 
}
