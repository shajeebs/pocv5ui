import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
 
  constructor(public http:Http) {
        console.log('Data Services connected...!');
  }
 
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => res.json());
  }
 
  savePosts(posts){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', posts).subscribe();
  }
 
  getAccounts(){
    return this.http.get('http://localhost:3000/Account')
    .map(res => res.json());
  }
 
}
