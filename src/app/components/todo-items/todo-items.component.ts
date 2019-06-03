import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service'
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() todo : Todo;
// emiting out to the parent component
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); 

  constructor(private todoService:TodoService) { }

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
  // console.log('toggle'); toggle in UI
  todo.completed = !todo.completed;
  //  Toggle on server
  this.todoService.toggleCompleted(todo).subscribe(todo =>
    console.log(todo));
}
onDelete(todo){
  // console.log('Delete');
  // emit upwords because we have to delete item in todo-items

  this.deleteTodo.emit(todo);
}

}
