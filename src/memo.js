export function defaultEquality(prevArguments, nextArguments) {
  //return true is prev and next are the same
  return prevArguments.length === nextArguments.length &&
  prevArguments.every((argument, i) => {
    return argument === nextArguments[i];
  });
}

export function memoize(fn, equalityFn = defaultEquality) {
  let lastArguments = null;
  let lastResult = null;
  
  return function(...currentArgs) {
    if(lastArguments && equalityFn(lastArguments, currentArgs)) {
      return lastResult;
    }

    lastArguments = currentArgs;
    lastResult = fn(currentArgs);
    return lastResult;
  };
}
