import { Component } from '@angular/core';
import { MatColumnDef, MatHeaderRowDef, MatNoDataRow, MatRowDef, MatTable, MatTableModule } from '@angular/material/table';
import {
  AfterContentInit,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
  ContentChild,
} from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-wrapper-table',
  standalone: true,
  templateUrl: './wrapper-table.component.html',
  styleUrl: './wrapper-table.component.scss',
  styles: `
  table {
    width: 100%;
  }
`,
  imports: [MatTableModule, MatSortModule],
})
export class WrapperTableComponent<T> implements AfterContentInit {
  @ContentChildren(MatHeaderRowDef) headerRowDefs!: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs!: QueryList<MatRowDef<T>>;
  @ContentChildren(MatColumnDef) columnDefs!: QueryList<MatColumnDef>;
  @ContentChild(MatNoDataRow) noDataRow!: MatNoDataRow;

  @ViewChild(MatTable, { static: true }) table!: MatTable<T>;

  @Input() columns!: string[];

  @Input() dataSource!: DataSource<T>;

  ngAfterContentInit() {
    this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
    this.table.setNoDataRow(this.noDataRow);
  }
}
