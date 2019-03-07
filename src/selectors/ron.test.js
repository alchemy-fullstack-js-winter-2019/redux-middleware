import { getFacts } from './ron';

describe('selectors', () => {
  let state = {};

  beforeEach(() => {
    state = {
      ron: {
        facts: ['a', 'b']
      }
    };
  });

  it('returns list of facts', () => {
    expect(getFacts(state)).toEqual(['a', 'b']);
  });
});
