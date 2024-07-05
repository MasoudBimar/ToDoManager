import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Subject } from 'rxjs';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { List } from '../../state/model';
import { Store } from '@ngrx/store';
import { AddList } from '../../state/list.actions';

@Component({
  selector: 'app-list-form',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,

  ],
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnDestroy, OnInit {

  @Output() listCreated = new EventEmitter<Partial<List>>();
  readonly dialogRef = inject(MatDialogRef<ListFormComponent>);
  listForm: FormGroup;

  private unsubscribe = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store) {
    this.listForm = this.fb.group({
      title: ['', Validators.required],
      // description: ['', Validators.required],
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit() {
    // this.list = new FormControl();
    // this.list.valueChanges
    //   .pipe(debounceTime(200), takeUntil(this.unsubscribe))
    //   .subscribe(value => {
    //     this.listChange.emit({ title: value });
    //   });
  }

  createList() {
    if (this.listForm.valid) {
      if (this.listForm.value.title) {
        this.store.dispatch(
          new AddList({
            id: Math.random(),
            title: this.listForm.value.title,
            date: new Date(),
            isMain: false
          })
        );
        this.dialogRef.close();
      }
    }
  }


}
