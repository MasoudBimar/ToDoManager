import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { List, TaskEntity } from '../../state/model';
import { TaskActions } from '../../state/task.actions';
import { ListFormComponent } from '../list-form/list-form.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskComponent } from '../task/task.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-dashboard',
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
    TaskComponent,
    MatDialogTitle,
    MatDialogContent,
    MatDialogModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
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
    // return  this.incompleteTasks.pipe(filter((tasks: TaskEntity[]) => {
    //   return tasks.filter(task => task.list === listId);
    // }));
    // this.store.pipe(select(taskList(listId)));
  }
}
