export function defaultEquality(prevArgs, nextArgs) {
  return prevArgs.length === nextArgs.length && 
    prevArgs.every((arg, i) => {
    return arg === nextArgs[i];
  });
}

export function memoize(fn, equalityFn= defaultEquality) {
  let lastArgs = null;
  let lastResult = null;

  return function(...currentArgs) {
    if(lastArgs && equalityFn(lastArgs, currentArgs)) {
      return lastResult;
    }
    lastArgs = currentArgs;
    lastResult = fn(...currentArgs);

    return lastResult;
  };
}
 