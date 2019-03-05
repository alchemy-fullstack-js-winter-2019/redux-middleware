import { defaultEquality, reactPropsEquality } from './memo';

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
  });
});
