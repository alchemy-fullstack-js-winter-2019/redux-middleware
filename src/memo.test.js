import { defaultEquality } from './memo';

describe('default equality', () => {
  it('can tell if arguments are the same', () => {
    const prevArguments=[1, 2, 3];
    const newArguments=[1, 2, 3];
    expect(defaultEquality(prevArguments, newArguments)).toEqual(true);
  })

  it('can tell if arguments are not the same', () => {
    const prevArguments=[1, 2, 4];
    const newArguments=[1, 2, 3];
    expect(defaultEquality(prevArguments, newArguments)).toEqual(false);
  })

  it('can tell if arguments are different because of length', () => {
    const prevArguments=[1, 2, 3];
    const newArguments=[1, 2, 3, 4];
    expect(defaultEquality(prevArguments, newArguments)).toEqual(false);
  })
})