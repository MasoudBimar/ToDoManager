import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule, MatCheckboxChange } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { TaskEntity } from '../../state/model'

@Component({
  selector: 'app-task',
  standalone: true,
  imports:[MatCheckboxModule, MatListModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Output() taskChange = new EventEmitter<TaskEntity>();
  @Input() tasks: TaskEntity[] | null = null;

  @Output() completeChange = new EventEmitter<MatCheckboxChange>();

}
