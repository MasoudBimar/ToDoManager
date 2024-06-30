import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { ListActionTypes, ListActions } from './list.actions';
import { List } from './task.model';

export interface ListState extends EntityState<List> {}

export const listAdapter: EntityAdapter<List> = createEntityAdapter<List>();

export const initialSiteState: ListState = listAdapter.getInitialState();

export function listReducer(state: ListState = initialSiteState, action: ListActions): ListState {
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
