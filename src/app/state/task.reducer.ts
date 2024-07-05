
// import { initialTaskState, taskAdapter, TaskState } from '../state.interface';
// import { TaskActions, TaskActionTypes } from './task.actions';

import { createReducer, on } from "@ngrx/store";
import { initialTaskState } from "./state.interface";
import { TaskAPIActions } from "./task.actions";


export const taskReducer = createReducer(
  initialTaskState,
  on(TaskAPIActions.retrievedTaskList, (_state, { tasks }) => tasks)
);

// export function taskReducer(state: TaskState = initialTaskState, action: TaskActions):TaskState {
//   switch (action.type) {
//     case TaskActionTypes.AddTask:
//       return taskAdapter.addOne(action.payload, state);

//     case TaskActionTypes.ClearTasks:
//       return taskAdapter.removeAll(state);

//     case TaskActionTypes.CompleteTask:
//       return taskAdapter.updateOne({
//         id: action.payload.id,
//         changes: {
//           ...action.payload,
//           done: true
//         }
//       }, state);

//     case TaskActionTypes.IncompleteTask:
//       return taskAdapter.updateOne({
//         id: action.payload.id,
//         changes: {
//           ...action.payload,
//           done: false
//         }
//       }, state);

//     case TaskActionTypes.RemoveTask:
//       return taskAdapter.removeOne(action.payload.id, state);

//     default: {
//       return state;
//     }
//   }
// }
