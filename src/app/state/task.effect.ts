import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { TasksService } from '../services/tasks.service';

@Injectable()
export class TasksEffects {

  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType('[Tasks API] Load Task List'),
    exhaustMap(() => this.tasksService.getTasks()
      .pipe(
        map(tasks => ({ type: '[Task API] Retrieved Task List', payload: tasks })),
        catchError(() => EMPTY)
      ))
    )
  );

  addTask$ = createEffect(() => this.actions$.pipe(
    ofType('[Tasks] Add Task'),
    exhaustMap((action: any) => this.tasksService.addTask(action)
      .pipe(
        map(task => ({ type: '[Tasks] Task Added' })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private tasksService: TasksService
  ) {}
}
