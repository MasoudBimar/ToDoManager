import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog, MatDialogModule
} from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { List } from '../../state/model';
import { ListFormComponent } from '../list-form/list-form.component';
import { TaskComponent } from '../task/task.component';
import { WrapperTableComponent } from '../wrapper-table/wrapper-table.component';

@Component({
  selector: 'app-task-list',
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

  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['title', 'description', 'date'];
  dataSource: MatTableDataSource<List> = new MatTableDataSource<List>([]);

  @ViewChild('sort') sort!: MatSort;
  constructor(private store: Store) {
    // this.store.pipe(select(allLists)).subscribe((result: List[]) => {
    //   console.log("🚀 ~ ListsComponent ~ this.store.pipe ~ result:", result)
    //   this.dataSource.data = result;
    // });
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
    this.dialog.open(ListFormComponent);
  }
}
