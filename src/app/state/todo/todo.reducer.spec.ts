import * as fromReducer from './todo.reducer';
import * as fromAction from './todo.actions';
import * as fromModel from './todo.model';

describe('TodoReducer', () => {
  const todo: fromModel.ToDo = {
    id: 1,
    task: 'Unit testing',
    complete: false
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialSiteState } = fromReducer;
      const action = { type: undefined };
      const state = fromReducer.toDoReducer(undefined, action);

      expect(state).toBe(initialSiteState);
    });
  });

  describe('[Todo] Add Todo', () => {
    it('should add a todo to state', () => {
      const action = new fromAction.AddToDo({
        ...todo
      });

      const result = fromReducer.toDoReducer(
        fromReducer.initialSiteState,
        action
      );

      expect(result).toEqual({
        ...fromReducer.initialSiteState,
        entities: {
          [todo.id]: todo
        },
        ids: [todo.id]
      });
    });
  });
});
