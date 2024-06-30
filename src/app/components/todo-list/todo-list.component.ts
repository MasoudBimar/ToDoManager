import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { ToDo } from '../../state/todo/todo.model';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports:[MatListModule, TodoComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() toDos: ToDo[] | null = null;

  @Output() toDoChange = new EventEmitter<ToDo>();

  constructor() {}

  onCompleteChange(toDo: ToDo, change: MatCheckboxChange) {
    this.toDoChange.emit({
      ...toDo,
      complete: change.checked
    });
  }
}
