import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Task } from './task.model';
import { TaskState, taskAdapter } from './task.reducer';
import { ListState, listAdapter } from './list.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('task');
export const selectListState = createFeatureSelector<ListState>('list');

export const {
  selectIds: TaskIds,
  selectEntities: taskEntities,
  selectAll: allTasks,
  selectTotal: totalTasks
} = taskAdapter.getSelectors(selectTaskState);

export const {
  selectIds: ListIds,
  selectEntities: listEntities,
  selectAll: allLists,
  selectTotal: totalLists
} = listAdapter.getSelectors(selectListState);

export const completeTasks = createSelector(allTasks, (tasks: Array<Task>) => tasks.filter(task => task.done));
export const incompleteTasks = createSelector(allTasks, (tasks: Array<Task>) => tasks.filter(task => !task.done));
// export const fullList = createSelector(allLists);
export const taskList = (listId: number) => createSelector(allTasks, (tasks: Array<Task>) => tasks.filter(task => task.list === listId));
