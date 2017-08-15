import { Component, OnInit } from '@angular/core';
import {TemplateRef, ViewChild} from '@angular/core';
import {Headers, Response} from '@angular/http';
import { DataService }  from '../../services/data.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { Post } from '../../models/post';
 
@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  posts:Post[];
  post:Post;
  selectedPost:Post;
  isNewRecord:boolean;
  statusMessage:string;
  @ViewChild('readOnlyTemplate')readOnlyTemplate : TemplateRef < any >;
  @ViewChild('editTemplate')editTemplate : TemplateRef < any >;

 
  constructor(private ds:DataService) { }
 
  ngOnInit() {
      this.getBlogs();
  }

  addPost(){
    //alert('Hello world');
    //this.selectedPost = new Post;
  }

  editPost(pst:Post){
    this.selectedPost = pst;
  }

  loadTemplate(pst : Post) {
        if (this.selectedPost && this.selectedPost.id == pst.id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }

    //9. Cancel edit
  cancel() {
      this.selectedPost = null;
  }

  getBlogs(){
    this.ds.getPosts().subscribe((resp: Response) => { //console.log(posts);
      this.posts = resp.json();
    });
  }

  saveBlog(){
    if(this.isNewRecord){
        //add a new Post
          this.ds.savePost(this.selectedPost).subscribe((resp : Response) => {
            this.post = resp.json(),
            this.statusMessage = 'Record Added Successfully.',
              this.getBlogs();
        });
        this.isNewRecord = false;
        this.selectedPost = null;
        
    }else{
        //edit the record
          this.ds.updatePost(this.selectedPost.id, this.selectedPost).subscribe((resp : Response) => {
            this.statusMessage = 'Record Updated Successfully.',
            this.getBlogs();
        });
        this.selectedPost = null;
    }
  }

  deletePost(pst:Post){
    console.log('Deleted...!');
    this.ds.deletePost(pst.id).subscribe((resp : Response) => { 
                this.statusMessage = 'Record Deleted Successfully.';
                // this.getBlogs();
    });
  }
 
}
