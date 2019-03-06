import { logger } from './logger';

describe('logging middleware', () => {
  it('logs an action', () => {
    console.log = jest.fn();
    const store = {
      getState() {
        return {
          title: 'Hello'
        };
      }
    };

    const next = jest.fn();
    const action = {
      type: 'UPDATE_TITLE',
      payload: 'my new title'
    };

    logger(store)(next)(action);

    expect(console.log).toHaveBeenCalledWith('INCOMING ACTION', action);
  });
});
