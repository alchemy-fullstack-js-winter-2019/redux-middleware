import { defaultEquality, memoize } from './Memo';

describe('Memo', () => {
  it('checks if two arguements are the same', () => {
    const arguementOne = [1, 2, 3, 4];
    const arguementTwo = [1, 2, 3, 4];

    expect(defaultEquality(arguementOne, arguementTwo)).toEqual(true);
  });

  it('checks if two arguements are not the same length', () => {
    const arguementOne = [1, 2, 3];
    const arguementTwo = [1, 2, 3, 4];

    expect(defaultEquality(arguementOne, arguementTwo)).toEqual(false);
  });

  it('checks if two arguements are not the same', () => {
    const arguementOne = [1, 2, 3];
    const arguementTwo = [1, 2, 4];

    expect(defaultEquality(arguementOne, arguementTwo)).toEqual(false);
  });

  it('memoizes a function', () => {
    const fn = jest.fn();
    const memo = memoize(fn);

    memo(1, 2, 3);
    memo(1, 2, 3);
    memo(1, 2, 3);

    expect(fn).toBeCalledTimes(1);

    memo(1, 3, 4);
    memo(1, 3, 4);

    expect(fn).toBeCalledTimes(2);
  });
});

