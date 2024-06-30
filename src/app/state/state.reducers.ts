import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { State } from './state.interface';
import { ToDoActions } from './todo/todo.actions';
import { toDoReducer } from './todo/todo.reducer';

export const appReducers: ActionReducerMap<State, ToDoActions> = {
  todo: toDoReducer
};

export const metaReducers: MetaReducer<State,ToDoActions>[] = isDevMode() ? [] : [];