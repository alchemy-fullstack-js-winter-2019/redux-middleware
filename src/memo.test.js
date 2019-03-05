import {
  defaultEquality
} from './memo';

describe('memo', () => {
  it('tests for equality', () => {
    const prevArg = [1, 2];
    const nextArg = [1, 2];
    expect(defaultEquality(prevArg, nextArg)).toBeTruthy();
  });
});
