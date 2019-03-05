import { defaultEquality, reactPropsEquality, memoize } from './memo';

describe('memo', () => {
  describe('defaultEquality', () => {
    it('checks for equality - returns true', () => {
      const prevArgs = [1, 2, 3];
      const nextArgs = [1, 2, 3];
    
      expect(defaultEquality(prevArgs, nextArgs)).toBeTruthy();
    });

    it('checks for inequality - returns false', () => {
      const prevArgs = [1, 2, 3];
      const nextArgs = [1, 3, 2];
    
      expect(defaultEquality(prevArgs, nextArgs)).toBeFalsy();
    });

    it('can check for extra args', () => {
      const prevArgs = [1, 2, 3];
      const nextArgs = [1, 2, 3, 4];
    
      expect(defaultEquality(prevArgs, nextArgs)).toBeFalsy();
    });
  });

  describe('reactPropsEquality', () => {
    it('checks for prop equality', () => {
      const prevProps = {
        a: 1,
        b: 2,
        c: 3
      };
      const newProps = {
        a: 1,
        b: 2,
        c: 3
      };
    
      expect(reactPropsEquality(prevProps, newProps)).toBeTruthy();
    });
    it('checks for prop inequality', () => {
      const prevProps = {
        a: 1,
        b: 2,
        c: 3
      };
      const newProps = {
        b: 1,
        a: 2,
        c: 3
      };
    
      expect(reactPropsEquality(prevProps, newProps)).toBeFalsy();
    });
    it('checks for prop length equality', () => {
      const prevProps = {
        a: 1,
        b: 2,
        c: 3
      };
      const newProps = {
        b: 1,
        a: 2,
        c: 3,
        d: 4
      };
    
      expect(reactPropsEquality(prevProps, newProps)).toBeFalsy();
    });
  });

  describe('memoize', () => {
    it('memoizes a function', () => {
      const fn = jest.fn();
      const memo = memoize(fn);

      memo(1, 2, 3);
      memo(1, 2, 3);

      expect(fn).toBeCalledTimes(1);

      memo(1, 2, 3);
      memo(1, 2, 3);

      expect(fn).toBeCalledTimes(1);      
    });
  });
});
