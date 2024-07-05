import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog,
  MatDialogModule
} from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../state/model';
import { TaskAPIActions } from '../../state/task.actions';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskComponent } from '../task/task.component';
import { WrapperTableComponent } from '../wrapper-table/wrapper-table.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatListModule,
    TaskComponent,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    forwardRef(() => WrapperTableComponent),
    MatSortModule,
    MatTableModule,
    MatDialogModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['title', 'description', 'date'];
  dataSource: MatTableDataSource<Task> = new MatTableDataSource<Task>([]);

  @ViewChild('sort') sort!: MatSort;
  constructor(private store: Store, private tasksService: TasksService) {
    // this.store.pipe(select(allTasks)).subscribe((result: Task[]) => {
    //   this.dataSource.data = result;
    // });
    // this.store.dispatch({ type: '[Movies Page] Load Movies' });
  }
  ngOnInit(): void {
    // this.tasksService
    // .getTasks()
    // .subscribe((tasks) =>
    //   this.store.dispatch(TaskAPIActions.retrievedTaskList({ tasks }))
    // );
    this.store.dispatch({ type: '[Tasks API] Load Task List' });
    // this.store.pipe(select(incompleteTasks)).subscribe((result: Task[]) => {
    //   this.dataSource.data = result as Task[];
    // });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  clearTable() {
    this.dataSource.data = [];
  }

  openDialog() {
    const dialogRef = this.dialog.open(TaskFormComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.store.dispatch(TaskAPIActions.loadTaskList({ listId: 1 }));
      }
    });
  }
}
