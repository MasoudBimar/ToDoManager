import { ActionReducerMap, combineReducers, MetaReducer, State } from '@ngrx/store';

import { AppState } from './state.interface';
import { TaskActions } from './task/task.actions';
import { taskReducer } from './task/task.reducer';
import { isDevMode } from '@angular/core';
import { ListActions } from './list/list.actions';
import { listReducer } from './list/list.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  taskState: taskReducer,
  listState: listReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
