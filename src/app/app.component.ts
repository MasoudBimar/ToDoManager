import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ListFormComponent } from './components/list-form/list-form.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { List, TaskEntity } from './state/model';
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
  completeTasks!: Observable<Array<TaskEntity>>;

  incompleteTasks!: Observable<Array<TaskEntity>>;

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

  onCompleteTask(task: TaskEntity) {
    // this.store.dispatch(new CompleteTask(task));
  }

  onIncompleteTask(task: TaskEntity) {
    // this.store.dispatch(new IncompleteTask(task));
  }

  getTaskList(listId: number) {
    // return this.store.pipe(select(taskList(listId)));
  }
}
