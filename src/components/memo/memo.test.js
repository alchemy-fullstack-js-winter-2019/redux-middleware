import { defaultEquality } from './memo';

describe('Memo', () => {
  describe('defaultEquality', () => {
    it('can tell if arguments are the same', () => {
      const prevArguments = [1, 2, 3];
      const nextArguments = [1, 2, 3];

      expect(defaultEquality(prevArguments, nextArguments))
    });
  });
});
