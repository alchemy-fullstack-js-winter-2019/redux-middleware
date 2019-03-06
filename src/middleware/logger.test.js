import { logger } from './logger';

describe('logging middleware', () => {
  it('logs', () => {
    console.log = jest.fn();
    const store = {
      getState() {
        return {
          title: 'hello'
        };
      }
    };
    const next = jest.fn();
    const action = {
      type: 'UPDATE_TITLE',
      payload: 'my title'
    };

    logger(store)(next)(action);

    expect(console.log).toHaveBeenCalledWith('INCOMING_ACTION', action);  
  });
});
