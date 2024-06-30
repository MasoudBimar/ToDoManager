import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule, MatCheckboxChange } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { Task } from '../../state/task/task.model'

@Component({
  selector: 'app-task',
  standalone: true,
  imports:[MatCheckboxModule, MatListModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task!: Task;

  @Output() completeChange = new EventEmitter<MatCheckboxChange>();

}
