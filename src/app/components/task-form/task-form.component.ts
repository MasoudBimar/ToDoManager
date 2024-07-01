import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable, Subject } from 'rxjs';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../state/state.interface';
import { allLists } from '../../state/task';
import { AddTask } from '../../state/task/task.actions';
import { List, Task } from '../../state/state.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [MatCheckboxModule, MatDialogTitle,
    MatDialogClose,
    MatDialogContent, 
    MatDialogTitle, 
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnDestroy, OnInit {

  @Output() taskCreated = new EventEmitter<Partial<Task>>();

  taskForm: FormGroup;
  lists: Observable<List[]>;

  private unsubscribe = new Subject<void>();
  readonly dialogRef = inject(MatDialogRef<TaskFormComponent>);
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.lists = this.store.pipe(select(allLists));
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
      if (this.taskForm.value.title && this.taskForm.value.description) {
        this.store.dispatch(
          new AddTask({
            id: Math.random(),
            done: false,
            title: this.taskForm.value.title,
            description: this.taskForm.value.description,
            list: 1,
            date: new Date()
          })
        );
        this.dialogRef.close();
      }
    }
  }


}
