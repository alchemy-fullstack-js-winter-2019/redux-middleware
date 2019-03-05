import { areEqual, memoize } from './memo';

describe('test areEqual function', () => {
    it('test that two arrays are directly equal', () => {
        const array1 = [1, 4];
        const array2 = [1, 4];

        const result = areEqual(array1, array2);
        expect(result).toBeTruthy();
    });
    it('test that two arrays are directly equal even if lengths are different', () => {
        const array1 = [1, 4];
        const array2 = [1, 4, 5];

        const result = areEqual(array1, array2);
        expect(result).toBeFalsy();
    });


    it('memoizes a function', () => {
        const fn = jest.fn();
        const memo = memoize(fn);
        memo(1, 2, 3);
        memo(1, 2, 3);
        expect(fn).toBeCalledTimes(1);
        
        memo(1, 2, 5);
        expect(fn).toBeCalledTimes(2);


    });
})
;
