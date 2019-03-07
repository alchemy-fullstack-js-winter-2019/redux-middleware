import { defaultEquality, memoize } from './memo';

describe('default equality', () => {
  it('can tell if arguments are the same', () => {
    const prevArguments = [1, 2, 3];
    const newArguments = [1, 2, 3];
    expect(defaultEquality(prevArguments, newArguments)).toEqual(true);
  });

  it('can tell if arguments are not the same', () => {
    const prevArguments = [1, 2, 4];
    const newArguments = [1, 2, 3];
    expect(defaultEquality(prevArguments, newArguments)).toEqual(false);
  });

  it('can tell if arguments are different because of length', () => {
    const prevArguments = [1, 2, 3];
    const newArguments = [1, 2, 3, 4];
    expect(defaultEquality(prevArguments, newArguments)).toEqual(false);
  });
});

describe('memoize function', () => {
  it('memoizes a function', () => {
    const fn = jest.fn();
    const memo = memoize(fn);
    
    memo(1, 2, 3);
    memo(1, 2, 3);
    
    expect(fn).toBeCalledTimes(1);

    memo(1, 5);
    memo(1, 5);
    memo(1, 5);
    
    expect(fn).toBeCalledTimes(2);

    memo(2, 5);
    memo(2, 7);

    expect(fn).toBeCalledTimes(4);
  });
});
