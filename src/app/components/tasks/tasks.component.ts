import { CommonModule } from '@angular/common';
import { Component, forwardRef, ViewChild, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../state/state.interface';
import { allTasks } from '../../state/task';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';
import { Task } from '../../state/state.model';
import { TaskComponent } from '../task/task.component';
import { WrapperTableComponent } from '../wrapper-table/wrapper-table.component';
import { TaskFormComponent } from '../task-form/task-form.component';

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
    MatDialogModule
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['title', 'description', 'date'];
  dataSource: MatTableDataSource<Task> = new MatTableDataSource<Task>([]);

  @ViewChild('sort') sort!: MatSort;
  constructor(private store: Store<AppState>) {
    this.store.pipe(select(allTasks)).subscribe((result: Task[]) => {
      this.dataSource.data = result;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  clearTable() {
    this.dataSource.data = [];
  }

  addData() {
    // this.dataSource.data = ELEMENT_DATA;
  }

  openDialog(){
    this.dialog.open(TaskFormComponent);
  }
}
