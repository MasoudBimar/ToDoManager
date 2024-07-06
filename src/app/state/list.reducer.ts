
// import { initialListState, listAdapter, ListState } from '../state.interface';
import { createReducer, on } from '@ngrx/store';
import { ListActions } from './list.actions';
import { List } from './model';
import { TaskActions } from './task.actions';
// import { ListActions, ListActionTypes } from './list.actions';


export const initialListState: ListState = taskAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

export const listReducer = createReducer(
  initialListState,
  on(TaskActions.removeTask, (state: Readonly<List[]>, { id }) =>
    state.filter((id) => id !== id)
  ),
  on(ListActions.addList, (state: Readonly<List[]>, list) => {
    if (state.findIndex(task => task.id === list.id) > -1) return state;

    return [...state, list];
  })
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
