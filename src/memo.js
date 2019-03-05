export const defaultEquality = (prevArg, nextArg) => {
  if(prevArg.length === nextArg.length) {
    return prevArg.every((arg, i) => arg === nextArg[i]);
  }
  return false;
};

export const memoize = (fn, equalityFn = defaultEquality) => {
  let lastArgs = [];
  let nextArgs = [];
  let lastResult = null;
  return function() {
    nextArgs = [...arguments];
    if(lastArgs && equalityFn(lastArgs, nextArgs)) {
      return lastResult;
    }

    lastArgs = nextArgs;
    lastResult = fn(...nextArgs);

    return lastResult;
  };
};
