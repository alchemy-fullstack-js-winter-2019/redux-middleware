import { logger } from './logger';

describe('logger tests', () => {
    it('logs the current action and state upon invocation', () => {
        console.log = jest.fn();

        const store = {
            getState() {
                return {
                    name: 'lance'
                };
            }
        };
        const next = jest.fn();

        const action = {
            type: 'UPDATE_NAME',
            payload: 'some new name'
        };

        logger(store)(next)(action);
        expect(console.log).toBeCalledWith('dispatching', action);
    });
});
