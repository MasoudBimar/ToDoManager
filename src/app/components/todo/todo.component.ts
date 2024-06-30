import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule, MatCheckboxChange } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { ToDo } from '../../state/todo/todo.model'

@Component({
  selector: 'app-todo',
  standalone: true,
  imports:[MatCheckboxModule, MatListModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() toDo!: ToDo;

  @Output() completeChange = new EventEmitter<MatCheckboxChange>();

}