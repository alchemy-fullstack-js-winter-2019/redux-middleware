import { isPromise } from './promise';


describe('promise middleware', () => {
  describe('isPromise', () => {
    it('returns false if a promise isnt passed', () => {
      const result = isPromise(1234);
      expect(result).toBeFalsy();
    });
    it('returns true if passed a promise', () => {
      const promise = Promise.resolve(1234);
      const result = isPromise(promise);
      expect(result).toBeTruthy();
    });
  });
  describe('middleware', () => {
    let reducer = null;
    let store = null;

    beforeEach(() => {

    })
    it('dis')
  })
});

