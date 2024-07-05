import { createFeatureSelector, createSelector } from '@ngrx/store';

import { List, Task } from './model';

export const selectTaskState = createFeatureSelector<Task[]>('tasks');
export const selectListState = createFeatureSelector<Readonly<List>>('lists');

// export const {
//   selectIds: TaskIds,
//   selectEntities: taskEntities,
//   selectAll: allTasks,
//   selectTotal: totalTasks
// } = taskAdapter.getSelectors(selectTaskState);

// export const {
//   selectIds: ListIds,
//   selectEntities: listEntities,
//   selectAll: allLists,
//   selectTotal: totalLists
// } = listAdapter.getSelectors(selectListState);
// export const selectTaskList = createSelector(
//   selectTaskState,
//   selectListState,
//   (tasks, list) => {
//     return list.map((id) => books.find((book) => book.id === id)!);
//   }
// );

export const completeTasks = createSelector(selectTaskState, (tasks: Array<Task>) => tasks.filter(task => task.done));
export const incompleteTasks = createSelector(selectTaskState, (tasks: Array<Task>) => tasks.filter(task => !task.done));
export const allTasks = createSelector(selectTaskState, (tasks: Array<Task>) => tasks);
// export const fullList = createSelector(allLists);
// export const taskList = (listId: number) => createSelector(allTasks, (tasks: Array<Task>) => tasks.filter(task => task.list === listId));
