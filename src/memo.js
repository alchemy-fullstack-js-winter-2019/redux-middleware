export function defaultEquality(prevArgs, nextArgs) {
  return prevArgs.length === nextArgs.length &&
  prevArgs.every((arg, i) => {
    return arg === nextArgs[i];
  })
}

export function reactPropsEquality(props, prevProps) {
  const newProps = Object.keys(props);
  const oldProps = Object.keys(prevProps);
  return newProps.length === oldProps.length && oldProps.every((prop, i) => {
    return prop === newProps[i];
  })
}

// const memo = memoize(fn) sets memoize to only call the internal function therefore lastArguments will not be null the next time around
export function memoize(fn, equalityfn = defaultEquality) {
  let lastArguments = null;
  let lastResult = null;

  return function(...currentArguments) {
    if(lastArguments && equalityfn(lastArguments, currentArguments)) {
      return lastResult;
    }

    lastArguments = currentArguments;
    lastResult = fn(...currentArguments);
  
    return lastResult;
  }; 
}
