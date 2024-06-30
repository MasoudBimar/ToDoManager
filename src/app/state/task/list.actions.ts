import { Action } from '@ngrx/store';
import { List } from './task.model';

export enum ListActionTypes {
  AddList = '[List] Add List',
  // ClearCategories = '[List] Clear List',
  // CompleteList = '[List] Complete List',
  // IncompleteList = '[List] Incomplete List',
  RemoveList = '[List] Remove List'
}

export class AddList implements Action {
  readonly type = ListActionTypes.AddList;
  constructor(public payload: List) {}
}

// export class ClearLists implements Action {
//   readonly type = ListActionTypes.ClearLists;
// }

// export class CompleteList implements Action {
//   readonly type = ListActionTypes.CompleteList;
//   constructor(public payload: List) {}
// }

// export class IncompleteList implements Action {
//   readonly type = ListActionTypes.IncompleteList;
//   constructor(public payload: List) {}
// }

export class RemoveList implements Action {
  readonly type = ListActionTypes.RemoveList;
  constructor(public payload: List) {}
}

export type ListActions =
  | AddList
  // | ClearLists
  // | CompleteList
  // | IncompleteList
  | RemoveList;
