import { defaultEquality, memoize } from './memo';

describe('Memo', () => {
  describe('defaultEquality', () => {
    it('can tell if arguments are the same', () => {
      const prevArg = [1, 2, 3];
      const nextArg = [ 1, 2, 3];
      expect(defaultEquality(prevArg, nextArg)).toBeTruthy(); 
    });
    it('can tell if arguments are the same value', () => {
      const prevArg = [1, 2, 3];
      const nextArg = [ 1, 2, 4];
      expect(defaultEquality(prevArg, nextArg)).toBeFalsy();
    });
    it('can tell if arguments are different because of length', () => {
      const prevArg = [1, 2, 3];
      const nextArg = [ 1, 2, 3, 4];
      expect(defaultEquality(prevArg, nextArg)).toEqual(false);
    });
  });
  describe('memoize', () => {
    it('memoizes a function', () => {
      const fn = jest.fn();
      const memo = memoize(fn);
      memo(1, 2, 3);
      memo(1, 2, 3);

      expect(fn).toHaveBeenCalledTimes(1);

      memo(1, 2, 4);
      expect(fn).toHaveBeenCalledTimes(2);
    })
  })

});