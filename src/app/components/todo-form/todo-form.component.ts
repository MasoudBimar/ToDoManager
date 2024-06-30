import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ToDo } from '../../state/todo/todo.model';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [MatCheckboxModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnDestroy, OnInit {

  @Output() toDoChange = new EventEmitter<Partial<ToDo>>();

  task: FormControl = new FormControl();

  private unsubscribe = new Subject<void>();

  constructor() { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit() {
    // this.task = new FormControl();
    this.task.valueChanges
      .pipe(debounceTime(200), takeUntil(this.unsubscribe))
      .subscribe(value => {
        this.toDoChange.emit({ task: value });
      });
  }

}