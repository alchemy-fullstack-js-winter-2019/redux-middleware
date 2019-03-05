import { defaultEquality } from './memo';

describe('defaultEquality', () => {
    it('test tell if args are the same', () => {
        const prevArgs = [];
        const newArgs = ['a, b, c'];
        const results = defaultEquality(prevArgs, newArgs);

        expect(results).toEqual(false);
    });
});
