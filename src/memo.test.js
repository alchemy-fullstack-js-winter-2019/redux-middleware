import { defaultEquality } from './memo';

describe('Memo tests', () => {
  it('tests defaultEqaulity function', () => {
    const trueResult = defaultEquality(2, 2);
    const falseResult = defaultEquality(2, 9);

    expect(trueResult).toBeTruthy();
    expect(falseResult).toBeFalsy();
  });
});

