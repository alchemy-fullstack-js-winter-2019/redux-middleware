import { defaultEquality } from './memo';

describe('memo', () => {
  it('checks for equality - returns true', () => {
    const prevArgs = [1, 2, 3];
    const nextArgs = [1, 2, 3];
    
    expect(defaultEquality(prevArgs, nextArgs)).toBeTruthy();
  });
});
