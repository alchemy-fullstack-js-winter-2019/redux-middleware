import { isPromise } from './promise';
 
describe('promise middleware', () => {
  it('returns false if not passed a promise', () => {
    const result = isPromise(1234);
    expect(result).toBeFalsy();
  });

  it('returns true if passed a promise', () => {
    const promise = Promise.resolve(1234);
    const result = isPromise(promise);
    expect(result).toBeTruthy();
  });
});
