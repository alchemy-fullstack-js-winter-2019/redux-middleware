import { defaultEquality, memoize } from './memo';

describe('defaultEquality', () => {
  it('test tell if args are the same', () => {
    const prevArgs = [1, 2, 3];
    const newArgs = [1, 2, 3];
    const results = defaultEquality(prevArgs, newArgs);

    expect(results).toBeTruthy();
  });

  it('test tell if args are the NOT same', () => {
    const prevArgs = [1, 2, 3];
    const newArgs = [1, 2, 3, 4];
    const results = defaultEquality(prevArgs, newArgs);

    expect(results).toBeFalsy();
  });
});

describe('memo', () => {
  it('memoizes a function', () => {
    const func = jest.fn();
    const memo = memoize(func);

    memo(1, 2, 3);
    memo(1, 2, 4);
    memo(1, 2, 4);

    expect(func).toBeCalledTimes(2);
  });
});
