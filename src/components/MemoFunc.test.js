import { defaultEquality, memoize } from './MemoFunc';

describe('test if memo func works', () => {
  it('will return the previous argument', () => {
    const prevArgs = ['hello'];
    const nextArgs = ['what'];
    expect(defaultEquality(prevArgs, nextArgs)).toBeFalsy();
  });
  it('will return the previous argument', () => {
    const prevArgs = ['hello'];
    const nextArgs = ['hello'];
    expect(defaultEquality(prevArgs, nextArgs)).toBeTruthy();
  });
  it('will return the previous argument', () => {
    const prevArgs = ['hello'];
    const nextArgs = ['hello', 'what'];
    expect(defaultEquality(prevArgs, nextArgs)).toBeFalsy();
  });
  it('will return something', () => {
    const fn = jest.fn();
    const memo = memoize(fn);
    memo(1, 2, 3);
    memo(1, 2, 3);
    expect(fn).toBeCalledTimes(1);
  });
});
