export function defaultEquality(prevArguments, nextArguments) {
  return prevArguments.length === nextArguments.length &&
    prevArguments.every((arg, i) => {
      return arg === nextArguments[i];
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
