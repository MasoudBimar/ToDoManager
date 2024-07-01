
import { initialListState, listAdapter, ListState } from '../state.interface';
import { ListActions, ListActionTypes } from './list.actions';

export function listReducer(state: ListState = initialListState, action: ListActions): ListState {
  switch (action.type) {
    case ListActionTypes.AddList:
      return listAdapter.addOne(action.payload, state);

    // case ListActionTypes.ClearTasks:
    //   return taskAdapter.removeAll(state);

    // case ListActionTypes.CompleteTask:
    //   return taskAdapter.updateOne({
    //     id: action.payload.id,
    //     changes: {
    //       ...action.payload,
    //       done: true
    //     }
    //   }, state);

    // case ListActionTypes.IncompleteTask:
    //   return taskAdapter.updateOne({
    //     id: action.payload.id,
    //     changes: {
    //       ...action.payload,
    //       done: false
    //     }
    //   }, state);

    case ListActionTypes.RemoveList:
      return listAdapter.removeOne(action.payload.id, state);

    default: {
      return state;
    }
  }
}
