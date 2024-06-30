import { Action } from '@ngrx/store';

import { ToDo } from './todo.model';

export enum CategoryActionTypes {
  AddCategory = '[Category] Add Category',
  ClearCategories = '[Category] Clear Categories',
  // CompleteCategory = '[Category] Complete Category',
  // IncompleteCategory = '[Category] Incomplete Category',
  RemoveCategory = '[Category] Remove Category'
}

export class AddToDo implements Action {
  readonly type = CategoryActionTypes.AddToDo;
  constructor(public payload: Category) {}
}

export class ClearToDos implements Action {
  readonly type = CategoryActionTypes.ClearToDos;
}

export class CompleteToDo implements Action {
  readonly type = CategoryActionTypes.CompleteToDo;
  constructor(public payload: ToDo) {}
}

export class IncompleteToDo implements Action {
  readonly type = CategoryActionTypes.IncompleteToDo;
  constructor(public payload: ToDo) {}
}

export class RemoveToDo implements Action {
  readonly type = CategoryActionTypes.RemoveToDo;
  constructor(public payload: ToDo) {}
}

export type ToDoActions = 
  | AddToDo
  | ClearToDos
  | CompleteToDo
  | IncompleteToDo
  | RemoveToDo;