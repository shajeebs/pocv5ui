import { Component, OnInit } from '@angular/core';
import {TemplateRef, ViewChild} from '@angular/core';
import {Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { TodoService }  from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('readOnlyTemplate')readOnlyTemplate : TemplateRef < any >;
  @ViewChild('editTemplate')editTemplate : TemplateRef < any >;
  todos:Todo[];
  todo:Todo;
  selectedTodo:Todo;
  isNewRecord:boolean;
  statusMessage:string;
  isEdit:boolean = false;

  constructor(private tds:TodoService) { }

  ngOnInit() {
    //console.log('TodoComponent ngOnInit'); 
    this.getTodos();
  }

  showAdd(){
    this.isEdit = !this.isEdit;
    this.isNewRecord = true;
    console.log(this.todo);
    
  }

  // addTodo(){
  //   //this.selectedTodo = new Todo('','','',null,null);
  //   this.todos.push(this.selectedTodo);
  //       this.isNewRecord = true;
  // }

  editTodo(td:Todo){
    this.selectedTodo = td;
  }

  loadTemplate(td : Todo) {
        if (this.selectedTodo && this.selectedTodo._id == td._id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }

    //9. Cancel edit
  cancel() {
      this.selectedTodo = null;
  }

  getTodos(){
    this.tds.getTodos().subscribe((resp: Response) => { //console.log(this.todos);
      this.todos = resp.json();
    });
  }

  saveTodo(){
    if(this.isNewRecord){
        //add a new Post
        console.log(this.todo);
          this.tds.saveTodo(this.todo).subscribe((resp : Response) => {
            this.todo = resp.json(),
            this.statusMessage = 'Record Added Successfully.',
              this.getTodos();
        });
        this.isNewRecord = false;
        this.selectedTodo = null;
        
    }else{
        //edit the record
          this.tds.updateTodo(this.selectedTodo._id, this.selectedTodo).subscribe((resp : Response) => {
            this.statusMessage = 'Record Updated Successfully.',
            this.getTodos();
        });
        this.selectedTodo = null;
    }
  }

  deleteTodo(pst:Todo){
    console.log('Deleted...!');
    this.tds.deleteTodo(pst._id).subscribe((resp : Response) => { 
                this.statusMessage = 'Record Deleted Successfully.',
                this.getTodos();
    });
  }

}
