import { Component, OnInit ,Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() todo : Todo;
  constructor() { }

  ngOnInit() {
  }
  // set dynamic classes
  setClasses(){
    let classes = {
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes;
  }
onToggle(todo){
  // console.log('toggle');
  todo.complete = !todo.complete;
}
onDelete(todo){
  console.log('Delete');
}

}
