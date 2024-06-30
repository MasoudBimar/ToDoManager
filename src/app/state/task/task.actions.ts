import { Action } from '@ngrx/store';

import { Task } from './task.model';

export enum TaskActionTypes {
  AddTask = '[Task] Add Task',
  ClearTasks = '[Task] Clear Tasks',
  CompleteTask = '[Task] Complete Task',
  IncompleteTask = '[Task] Incomplete Task',
  RemoveTask = '[Task] Remove Task'
}

export class AddTask implements Action {
  readonly type = TaskActionTypes.AddTask;
  constructor(public payload: Task) {}
}

export class ClearTasks implements Action {
  readonly type = TaskActionTypes.ClearTasks;
}

export class CompleteTask implements Action {
  readonly type = TaskActionTypes.CompleteTask;
  constructor(public payload: Task) {}
}

export class IncompleteTask implements Action {
  readonly type = TaskActionTypes.IncompleteTask;
  constructor(public payload: Task) {}
}

export class RemoveTask implements Action {
  readonly type = TaskActionTypes.RemoveTask;
  constructor(public payload: Task) {}
}

export type TaskActions =
  | AddTask
  | ClearTasks
  | CompleteTask
  | IncompleteTask
  | RemoveTask;
