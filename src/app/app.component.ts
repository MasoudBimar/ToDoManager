import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './state/state.interface';
import { completeToDos, incompleteToDos } from './state/todo';
import { AddToDo, CompleteToDo, IncompleteToDo } from './state/todo/todo.actions';
import { ToDo, generateToDos } from './state/todo/todo.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatCardModule, TodoListComponent, TodoFormComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TodoManager';
  completeToDos?: Observable<ToDo[]>;

  incompleteToDos!: Observable<Array<ToDo>>;

  private _toDo!: Partial<ToDo>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    generateToDos().forEach(todo => this.store.dispatch(new AddToDo(todo)));
    this.completeToDos = this.store.pipe(select(completeToDos));
    this.incompleteToDos = this.store.pipe(select(incompleteToDos));
  }

  addToDo() {
    if (this._toDo.task) {
      this.store.dispatch(
        new AddToDo({
          id: Math.random(),
          complete: false,
          task: this._toDo.task,
          category: 'daily'
        })
      );
    }
  }

  onAddToDoChange(event: Partial<ToDo>) {
    this._toDo = event;
  }

  onCompleteToDo(toDo: ToDo) {
    this.store.dispatch(new CompleteToDo(toDo));
  }

  onIncompleteToDo(toDo: ToDo) {
    this.store.dispatch(new IncompleteToDo(toDo));
  }
}
