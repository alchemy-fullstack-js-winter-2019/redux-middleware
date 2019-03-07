import { logger } from './logger';

describe('loggin middleware', () => {
  it('logs an action', () => {
    console.log = jest.fn();
    const store = {
      getState() {
        return {
          title: 'HELLO'
        };
      }
    };

    const next = jest.fn();
    const action = {
      type: 'UPDATE_TITLE',
      payload: 'the title'
    };

    logger(store)(next)(action);

    expect(console.log).toHaveBeenCalledWith('ACTION!', action);
  });
});
