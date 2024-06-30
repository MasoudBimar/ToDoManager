import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Subject } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { List } from '../../state/task/task.model';

@Component({
  selector: 'app-list-form',
  standalone: true,
  imports: [MatCheckboxModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnDestroy, OnInit {

  @Output() listCreated = new EventEmitter<Partial<List>>();

  listForm: FormGroup;

  private unsubscribe = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.listForm = this.fb.group({
      title: [ '' ,Validators.required],
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
      this.listCreated.emit(this.listForm.value);
    }
  }


}
