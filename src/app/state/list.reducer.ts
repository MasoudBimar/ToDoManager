
// import { initialListState, listAdapter, ListState } from '../state.interface';
import { createReducer, on } from '@ngrx/store';
import { List } from './model';
import { ListActionTypes } from './list.actions';
import { TaskActions, TaskAPIActions } from './task.actions';
// import { ListActions, ListActionTypes } from './list.actions';


export const initialListState: Readonly<List[]> = [];

export const listReducer = createReducer(
  initialListState,
  on(TaskActions.removeTask, (state: Readonly<List[]>, { id }) =>
    state.filter((id) => id !== id)
  ),
  // on(TaskActions.addTask, (state: Readonly<List[]>, { id }) => {
  //   if (state.findIndex(task => task.id === id) > -1) return state;

  //   return [...state, {id: id}];
  // })
);




// export function listReducer(state: ListState = initialListState, action: ListActions): ListState {
//   switch (action.type) {
//     case ListActionTypes.AddList:
//       return listAdapter.addOne(action.payload, state);

//     case ListActionTypes.RemoveList:
//       return listAdapter.removeOne(action.payload.id, state);

//     default: {
//       return state;
//     }
//   }
// }
