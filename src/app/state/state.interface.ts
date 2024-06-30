import { ListActions } from "./task/list.actions";
import { ListState } from "./task/list.reducer";
import { TaskActions } from "./task/task.actions";
import { TaskState } from "./task/task.reducer";

export interface AppState {
  task: TaskState,
  // list: ListState
}

// export type AppActions = TaskActions | ListActions;
