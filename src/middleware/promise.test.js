import { isPromise } from './promise';

describe('promise middleware', () => {
  it('returns false if not passed a promise', () => {
    const result = isPromise(123);
    expect(result).toBeFalsy();
  });

  it('returns true if passed a promise', () => {
    const result = isPromise(Promise.resolve(123));
    expect(result).toBeTruthy();
  });
});
