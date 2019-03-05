import { logger } from './logger';

describe('middleware', () => {
  it('logger', () => {
    console.log = jest.fn();
    const store = {
      getState() {
        return {
          title: 'my title'
        };
      }
    };
    const next = jest.fn();
    const action = {
      type: 'UPDATE_TITLE',
      payload: 'my title'
    };

    logger(store)(next)(action);

    expect(console.log).toHaveBeenCalledWith('INCOMING ACTION', action);
  });
});
