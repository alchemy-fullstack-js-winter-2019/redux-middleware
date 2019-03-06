import { logger } from './logger';

describe('logger', () => {
  it('console.log logger', () => {
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
      payload: 'my title'
    };

    logger(store)(next)(action);

    expect(console.log).toHaveBeenCalledWith('INCOMING ACTION', action);
  });
});
