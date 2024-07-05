import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { AddList } from '../../state/list.actions';
import { List, generateTasks, generateLists, Task } from '../../state/model';
import { ListFormComponent } from '../list-form/list-form.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TasksComponent } from '../tasks/tasks.component';
import { TaskComponent } from '../task/task.component';
import { MatDialog, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { TaskActions } from '../../state/task.actions';

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
    if (task.title && task.description) {
      this.store.dispatch( TaskActions.addTask({
        _id: Math.random(),
        done: false,
        title: task.title,
        description: task.description,
        list: 1,
        date: new Date()
      })
      );
    }
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
    // return  this.incompleteTasks.pipe(filter((tasks: Task[]) => {
    //   return tasks.filter(task => task.list === listId);
    // }));
    // this.store.pipe(select(taskList(listId)));
  }
}
