import {
  defaultEquality,
  memoize
} from './memo';

describe('memo', () => {
  it('tests for equality', () => {
    const prevArg = [1, 2];
    const nextArg = [1, 2];
    expect(defaultEquality(prevArg, nextArg)).toBeTruthy();
  });

  it('memoizes a function', () => {
    const fn = jest.fn();
    const memo = memoize(fn);

    memo(1, 2);
    memo(1, 2);

    expect(fn).toHaveBeenCalledTimes(1);

    memo(1, 2, 3);

    expect(fn).toHaveBeenCalledTimes(2);
  });
});
