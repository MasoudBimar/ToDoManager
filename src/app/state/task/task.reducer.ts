import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { TaskActionTypes, TaskActions } from './task.actions';
import { Task } from './task.model';
import { ListActionTypes, ListActions } from './list.actions';

export interface TaskState extends EntityState<Task> {}

export const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialSiteState: TaskState = taskAdapter.getInitialState();

export function taskReducer(state: TaskState = initialSiteState, action: TaskActions):TaskState {
  switch (action.type) {
    case TaskActionTypes.AddTask:
      return taskAdapter.addOne(action.payload, state);

    case TaskActionTypes.ClearTasks:
      return taskAdapter.removeAll(state);

    case TaskActionTypes.CompleteTask:
      return taskAdapter.updateOne({
        id: action.payload.id,
        changes: {
          ...action.payload,
          done: true
        }
      }, state);

    case TaskActionTypes.IncompleteTask:
      return taskAdapter.updateOne({
        id: action.payload.id,
        changes: {
          ...action.payload,
          done: false
        }
      }, state);

    case TaskActionTypes.RemoveTask:
      return taskAdapter.removeOne(action.payload.id, state);

    default: {
      return state;
    }
  }
}
