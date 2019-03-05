export function defaultEquality(prevArguments, newArguments) {
  return prevArguments.length === newArguments.length && prevArguments.every((arg, i) => {
    return arg === newArguments[i];
  });
}

export function memoize(memoizeFunction, equalityFunction) {
  
}