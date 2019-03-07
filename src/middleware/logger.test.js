import { logger } from './logger';

describe('logging middleware', () => {
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
      type: 'CREATE_ACTION',
      payload: 'some action'
    };

    logger(store)(next)(action);

    expect(console.log).toHaveBeenCalledWith('INCOMING ACTION', action);
  });
});
