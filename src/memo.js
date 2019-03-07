export function defaultEquality(prevArguments, newArguments) {
  return prevArguments.length === newArguments.length && prevArguments.every((arg, i) => {
    return arg === newArguments[i];
  });
}

export function memoize(fn, equalityFn = defaultEquality) {
  let lastArguments = null;
  let lastResult = null;

  return function(...currentArguments) {
    if(lastArguments && equalityFn(lastArguments, currentArguments)) {
      return lastResult;
    }

    lastArguments = currentArguments;
    lastResult = fn(...currentArguments);

    return lastResult;
  }
}