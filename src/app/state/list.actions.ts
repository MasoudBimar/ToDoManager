import { Action, createAction, createActionGroup, props } from '@ngrx/store';
import { ListEntity } from './model';

export const initList = createAction('[List Page] Init');

export const ListActions = createActionGroup({
  source: 'Lists',
  events: {
    'Add List': props<ListEntity>(),
    'List Added': props<ListEntity>(),
    'Remove List': props<{ id: number }>(),
  },
});

export const ListAPIActions = createActionGroup({
  source: 'Lists API',
  events: {
    'Load List Success':   props<{ list: ListEntity[] }>(),
    'Load List Failure': props<{ error: any }>(),
  },
});