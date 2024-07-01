import * as fromReducer from './task.reducer';
import * as fromAction from './task.actions';
import * as fromModel from '../state.model';

describe('TaskReducer', () => {
  const task: fromModel.Task = {
    id: 1,
    title: 'Unit testing',
    description: 'Unit testing',
    done: false,
    date: new Date(),
    list: 1
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialSiteState } = fromReducer;
      const action = { type: undefined };
      const state = fromReducer.taskReducer(undefined, action);

      expect(state).toBe(initialSiteState);
    });
  });

  describe('[Task] Add Task', () => {
    it('should add a task to state', () => {
      const action = new fromAction.AddTask({
        ...task
      });

      const result = fromReducer.taskReducer(
        fromReducer.initialSiteState,
        action
      );

      expect(result).toEqual({
        ...fromReducer.initialSiteState,
        entities: {
          [task.id]: task
        },
        ids: [task.id]
      });
    });
  });
});
