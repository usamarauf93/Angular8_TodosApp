import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  title:string;
  constructor() { }

  ngOnInit() {
    this.title="Todos List";
    this.todos = [
      {
        id: 1,
        title: 'Todo one',
        completed: true
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: false
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: true
      }

    ]
  }

}
