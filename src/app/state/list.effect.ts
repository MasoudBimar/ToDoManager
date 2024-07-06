import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { ListsService } from '../services/lists.service';
import { initList, ListAPIActions } from './list.actions';

@Injectable({providedIn:'root'})
export class ListsEffects {

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initList),
      switchMap(() => this.listsService.getLists()),
      switchMap(lists => of(ListAPIActions.loadListSuccess({ list: lists }))),
      catchError((error) => {
        console.error('Error', error);
        return of(ListAPIActions.loadListFailure({ error }));
      })
    )
  );

  loadLists$ = createEffect(() => this.actions$.pipe(
    ofType('[Lists API] Load List List'),
    exhaustMap(() => this.listsService.getLists()
      .pipe(
        map(lists => ({ type: '[List API] Retrieved List', payload: lists })),
        catchError(() => EMPTY)
      ))
  )
  );

  addList$ = createEffect(() => this.actions$.pipe(
    ofType('[Lists] Add List'),
    exhaustMap((action: any) => this.listsService.addList(action)
      .pipe(
        map(List => ({ type: '[Lists] List Added' })),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private listsService: ListsService
  ) { }
}
