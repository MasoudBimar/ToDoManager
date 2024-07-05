import { Action, createActionGroup, props } from '@ngrx/store';

import { Task } from './model';

export const TaskActions = createActionGroup({
  source: 'Tasks',
  events: {
    'Add Task': props<Task>(),
    'Task Added': props<Task>(),
    'Remove Task': props<{ id: number }>(),
  },
});

export const TaskAPIActions = createActionGroup({
  source: 'Tasks API',
  events: {
    'Load Task List': props<{ listId: Readonly<number> }>(),
    'Retrieved Task List': props<{ tasks: Readonly<Task[]> }>(),
  },
});

// export enum TaskActionTypes {
//   AddTask = '[Task] Add Task',
//   CompleteTask = '[Task] Complete Task',
//   RemoveTask = '[Task] Remove Task'
// }

// export class AddTask implements Action {
//   readonly type = TaskActionTypes.AddTask;
//   constructor(public payload: Task) {}
// }

// export class ClearTasks implements Action {
//   readonly type = TaskActionTypes.ClearTasks;
// }

// export class CompleteTask implements Action {
//   readonly type = TaskActionTypes.CompleteTask;
//   constructor(public payload: Task) {}
// }

// export class IncompleteTask implements Action {
//   readonly type = TaskActionTypes.IncompleteTask;
//   constructor(public payload: Task) {}
// }

// export class RemoveTask implements Action {
//   readonly type = TaskActionTypes.RemoveTask;
//   constructor(public payload: Task) {}
// }

// export type TaskActions =
//   | AddTask
//   | ClearTasks
//   | CompleteTask
//   | IncompleteTask
//   | RemoveTask;
