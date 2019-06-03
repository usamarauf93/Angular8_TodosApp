import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  title:string;
  constructor(private todoService:TodoService) { }

  ngOnInit() {
     this.todoService.getTodos().subscribe(todos => {
       this.todos = todos;
     });
  }
  deleteTodo(todo:Todo){
    // delete from UI , filter is like foreach
    this.todos = this.todos.filter( t => t.id !== todo.id);
    // delete on server
    this.todoService.deleteTodo(todo).subscribe();
  }
}
