import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { List, Task } from "./state.model";

export interface TaskState extends EntityState<Task> { };
export const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>();
export const initialTaskState: TaskState = taskAdapter.getInitialState();

export interface ListState extends EntityState<List> { }

export const listAdapter: EntityAdapter<List> = createEntityAdapter<List>();

export const initialListState: ListState = listAdapter.getInitialState();

export interface AppState {
  taskState: TaskState,
  listState: ListState
}

// export type AppActions = TaskActions | ListActions;
