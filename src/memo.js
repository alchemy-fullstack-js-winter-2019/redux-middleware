export const defaultEquality = (prevArguments, newArguments) => {
  if(prevArguments.length !== newArguments.length) return false;
  for(let i = 0; i < prevArguments.length; i++) {
    if(prevArguments[i] !== newArguments[i]) return false;
  }
  return true;
};

export const memoize = (fn, equalityFn = defaultEquality) => {
  let lastArguments = null;
  let lastResult = null;

  return function(...currentArguments) {
    if(lastArguments && equalityFn(lastArguments, currentArguments)) {
      return lastResult;
    }
    lastArguments = currentArguments;
    lastResult = fn(currentArguments);

    return lastResult;
  };
};
