import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
//import 'rxjs/add/operator/map';

import { Post } from '../models/post';
import { Todo } from '../models/todo';

@Injectable()
export class DataService {
  private blogPostUrl = 'https://jsonplaceholder.typicode.com/posts';
  private blogTodoUrl = 'http://localhost:3000/todo';

  constructor(private http:Http) {
        console.log('Data Services connected...!');
  }
 
  getPosts(){
    return this.http.get(this.blogPostUrl);//.map(res => res.json());
  }
 
  savePost(pst: Post): Observable<Response>{
    let hdr = new Headers({'Content-Type': 'application/json'});
    let optns = new RequestOptions({headers: hdr});
    return this.http.post(this.blogPostUrl, JSON.stringify(pst), optns);
  }

  updatePost(id:string, pst: Post): Observable<Response>{
    let hdr = new Headers({'Content-Type': 'application/json'});
    let optns = new RequestOptions({headers: hdr});
    return this.http.put(this.blogPostUrl +'/' + id, JSON.stringify(pst), optns);
  }

  deletePost(id:string): Observable<Response>{
    return this.http.delete(this.blogPostUrl +'/' + id);
  }
 
  getAccounts(){
    return this.http.get('http://localhost:3000/Account')
    .map(res => res.json());
  }

  getTodos(){
    return this.http.get(this.blogTodoUrl);
  }
 
  saveTodo(td: Todo): Observable<Response>{
    let hdr = new Headers({'Content-Type': 'application/json'});
    let optns = new RequestOptions({headers: hdr});
    return this.http.post(this.blogTodoUrl, JSON.stringify(td), optns);
  }

  updateTodo(id:string, td: Todo): Observable<Response>{
    let hdr = new Headers({'Content-Type': 'application/json'});
    let optns = new RequestOptions({headers: hdr});
    return this.http.put(this.blogTodoUrl +'/' + id, JSON.stringify(td), optns);
  }

  deleteTodo(id:string): Observable<Response>{
    return this.http.delete(this.blogTodoUrl +'/' + id);
  }
 
}
