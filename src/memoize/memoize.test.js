import { defaultEquality, memoize } from './memoize';

describe('defaultEquality', () => {
  it('can tell if arguments are the same', () => {
    const prevArguments = [1, 2, 3];
    const nextArguments = [1, 2, 3];
    expect(defaultEquality(prevArguments, nextArguments)).toBeTruthy;
  });
  it('can tell if arguments are the same', () => {
    const prevArguments = [1, 2, 3];
    const nextArguments = [1, 2, 3, 4];
    expect(defaultEquality(prevArguments, nextArguments)).toBeFalsy;
  });
  it('can compare lengths of arguments', () => {
    const prevArguments = [1, 2, 3];
    const nextArguments = [1, 2, 3, 4];
    expect(defaultEquality(prevArguments, nextArguments)).toBeFalsy;
  });
});


describe('memoize', () => {
  it('memoize a function', () => {
    const fn = jest.fn();
    const memoizes = memoize(fn);

    memoizes(1, 2, 3);
    memoizes(1, 2, 3);
    
    expect(fn).toHaveBeenCalledTimes(1);

    memoizes(1, 2, 4);
    memoizes(1, 2, 4);

    expect(fn).toHaveBeenCalledTimes(2);
  });
});

