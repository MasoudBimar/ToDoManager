import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Task } from '../../state/task/task.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [MatCheckboxModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnDestroy, OnInit {

  @Output() taskCreated = new EventEmitter<Partial<Task>>();

  taskForm: FormGroup;

  private unsubscribe = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: [ '' ,Validators.required],
      description: ['', Validators.required],
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit() {
    // this.task = new FormControl();
    // this.task.valueChanges
    //   .pipe(debounceTime(200), takeUntil(this.unsubscribe))
    //   .subscribe(value => {
    //     this.taskChange.emit({ title: value });
    //   });
  }

  createTask() {
    if (this.taskForm.valid) {
      this.taskCreated.emit(this.taskForm.value);
    }
  }


}
