
import { EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { TaskEntity } from "./model";
import { initTasks, TaskActions, TaskAPIActions } from "./task.actions";
import { taskAdapter } from "./tasks.selector";

export interface TaskState extends EntityState<TaskEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export const initialTaskState: TaskState = taskAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

export const taskReducer = createReducer(
  initialTaskState,
  on(initTasks, (state) => ({ ...state, loaded: false, error: null })),
  on(TaskAPIActions.loadTaskList, (state, { tasks }) => taskAdapter.setAll(tasks, { ...state, loaded: true })),
);
