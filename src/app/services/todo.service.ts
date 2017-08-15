import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  private todoUrl = 'http://localhost:3000/todo';

  constructor(private http:Http) {
        console.log('TodoService connected...!');
  }

  getTodos(){
    return this.http.get(this.todoUrl);
  }
 
  saveTodo(td: Todo): Observable<Response>{
    let hdr = new Headers({'Content-Type': 'application/json'});
    let optns = new RequestOptions({headers: hdr});
    return this.http.post(this.todoUrl, JSON.stringify(td), optns);
  }

  updateTodo(id:string, td: Todo): Observable<Response>{
    let hdr = new Headers({'Content-Type': 'application/json'});
    let optns = new RequestOptions({headers: hdr});
    return this.http.put(this.todoUrl +'/' + id, JSON.stringify(td), optns);
  }

  deleteTodo(id:string): Observable<Response>{
    return this.http.delete(this.todoUrl +'/' + id);
  }
}
