import { defaultEquality, memoize } from './memo';

describe('equality functions', () => {
  it('can check if prev and next arguments are the same', () => {
    const prevArguments = [1, 2, 3];
    const nextArguments = [1, 2, 3];
    const result = defaultEquality(prevArguments, nextArguments);
    expect(result).toBeTruthy();
  });

  it('can check if prev and next arguments are NOT the same', () => {
    const prevArguments = [1, 2, 3];
    const nextArguments = [1, 2, 4];
    const result = defaultEquality(prevArguments, nextArguments);
    expect(result).toBeFalsy();
  });

  it('can check if prev and next arguments are different because of length', () => {
    const prevArguments = [1, 2, 3];
    const nextArguments = [1, 2, 3, 4];
    const result = defaultEquality(prevArguments, nextArguments);
    expect(result).toBeFalsy();
  });
});

describe('memoize', () => {
  it('can memoize a function', () => {
    const fn = jest.fn();
    const memo = memoize(fn);

    memo(1, 2, 3);
    memo(1, 2, 3);
    expect(fn).toBeCalledTimes(1);

    memo(1, 2, 4);
    expect(fn).toBeCalledTimes(2);

    memo(1, 2, 3);
    memo(1, 2, 4);
    expect(fn).toBeCalledTimes(4);
  });
});
