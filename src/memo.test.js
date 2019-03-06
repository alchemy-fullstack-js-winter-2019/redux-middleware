import { defaultEquality } from './memo';

describe('defaultEquality', () => {
  it('can tell if arguments are the same', () => {
    const prevArguments = [1,2,3];
    const nextArguments = [1,2,3];

    expect(defaultEquality(prevArguments, nextArguments)).toBeTruthy();
  })

  it('can tell if arguments length are the same', () => {
    const prevArgument = [1,2,3];
    const nextArguments = [1,2,3,4];

    expect(defaultEquality(prevArguments, nextArguments)).toBeFalse();
  });
});

describe('memoize', () => {
  it('memoizes', () => {
    const fn = jest.fn();
    const memo = memoize(fn);

    memo(1, 2, 3);
    memo(1, 3, 3);

    expect(fn).toBeCalledTimes(1); //once because it will be called twice with the same arguments so fn is only called once

    memo(1, 2, 4);
    memo(1, 2 ,4);
    expect(fn).toBeCalledTimes(2);
  });
});