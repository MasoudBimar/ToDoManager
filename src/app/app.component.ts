import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { routes } from './app.routes';
import { ListFormComponent } from './components/list-form/list-form.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { AddList } from './state/list.actions';
import { generateLists, generateTasks, List, Task } from './state/model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatCardModule,
    TasksComponent,
    TaskFormComponent,
    MatButtonModule,
    ListFormComponent,
    MatToolbarModule,
    RouterModule,
    TaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Task Manager';
  completeTasks!: Observable<Array<Task>>;

  incompleteTasks!: Observable<Array<Task>>;

  lists!: Observable<Array<List>>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    // generateTasks().forEach(task => this.store.dispatch(new AddTask(task)));
    // generateLists().forEach(list => this.store.dispatch(new AddList(list)));
    // this.completeTasks = this.store.pipe(select(completeTasks));
    // this.incompleteTasks = this.store.pipe(select(incompleteTasks));
    // this.lists = this.store.pipe(select(allLists));

  }

  addTask(task: Partial<Task>) {
    // if (task.title && task.description) {
    //   this.store.dispatch(
    //     new AddTask({
    //       id: Math.random(),
    //       done: false,
    //       title: task.title,
    //       description: task.description,
    //       list: 1,
    //       date: new Date()
    //     })
    //   );
    // }
  }

  addList(list: Partial<List>) {
    // if (list.title) {
    //   this.store.dispatch(
    //     new AddList({
    //       id: Math.random(),
    //       title: list.title,
    //       date: new Date(),
    //       isMain: false
    //     })
    //   );
    // }
  }

  onCompleteTask(task: Task) {
    // this.store.dispatch(new CompleteTask(task));
  }

  onIncompleteTask(task: Task) {
    // this.store.dispatch(new IncompleteTask(task));
  }

  getTaskList(listId: number) {
    // return this.store.pipe(select(taskList(listId)));
  }
}
