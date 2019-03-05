export function defaultEquality(prevArgs, newArgs) {
  return prevArgs.length === newArgs.length &&
        prevArgs.every((arg, i) => {
          return arg === newArgs[i];
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
  };
}
