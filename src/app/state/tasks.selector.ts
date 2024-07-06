import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ListEntity, TaskEntity } from './model';

import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";

export const listAdapter: EntityAdapter<ListEntity> = createEntityAdapter<ListEntity>();
export const taskAdapter: EntityAdapter<TaskEntity> = createEntityAdapter<TaskEntity>();

export const selectTaskState = createFeatureSelector<Readonly<TaskEntity[]>>('tasks');
export const selectListState = createFeatureSelector<Readonly<ListEntity>>('lists');

export const {
  selectIds: TaskIds,
  selectEntities: taskEntities,
  selectAll: allTasks,
  selectTotal: totalTasks
} = taskAdapter.getSelectors();

export const {
  selectIds: ListIds,
  selectEntities: listEntities,
  selectAll: allLists,
  selectTotal: totalLists
} = listAdapter.getSelectors();

export interface AppState {
  allLists: ListEntity[];
  allTasks: TaskEntity[];
}

export const selectAllLists = (state: AppState) => state.allLists;
export const selectAllTasks = (state: AppState) => state.allTasks;