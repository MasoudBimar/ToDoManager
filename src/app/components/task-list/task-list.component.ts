import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { Task } from '../../state/task/task.model';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports:[MatListModule, TaskComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: Task[] | null = null;

  @Output() taskChange = new EventEmitter<Task>();

  constructor() {}

}
