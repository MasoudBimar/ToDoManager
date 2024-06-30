import { ActionReducerMap, MetaReducer, State } from '@ngrx/store';

import { AppState } from './state.interface';
import { TaskActions } from './task/task.actions';
import { taskReducer } from './task/task.reducer';
import { isDevMode } from '@angular/core';

export const appReducers: ActionReducerMap<AppState, TaskActions> = {
  task: taskReducer,
  // list: listReducer
};

export const metaReducers: MetaReducer<AppState,TaskActions>[] = isDevMode() ? [] : [];
