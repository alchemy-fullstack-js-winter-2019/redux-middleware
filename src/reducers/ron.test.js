import reducer from './ron';

describe('reducer', () => {
  let state = {};
  beforeEach(() => {
    state = {
      facts: []
    };
  });

  it('fetches facts', () => {
    const result = reducer(state, {
      type: 'FETCH_FACTS',
      payload: ['a', 'b']
    });

    expect(result).toEqual({
      ...state,
      facts: ['a', 'b']
    });
  });
});
