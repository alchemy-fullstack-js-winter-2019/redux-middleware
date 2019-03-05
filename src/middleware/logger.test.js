import { logger } from './logger';

describe('logging in middleware', () => {
  it('logs an action', () => {
    console.log = jest.fn();
    const store = {
      getState() {
        return {
          title: 'hi'
        };
      }
    };

    const next = jest.fn();
    const action = {
      type: 'UPDATE_TITLE',
      payload: 'hi'
    };

    logger(store)(next)(action);
    expect(console.log).toHaveBeenCalledWith('hi');
  });
});
