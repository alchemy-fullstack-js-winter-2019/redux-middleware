//iterate to each arguments, returns true or false
export function defaultEquality(prevArguments, nextArguments) {
  return prevArguments.length === nextArguments.length && 
  prevArguments.every((arg, i) => {
    return arg === nextArguments[i];
  });
}
export function memoize(fn, equalityFn = defaultEquality) {
  //cache previous arguments
  let lastArg = null;
  let lastResult = null;

  return function(...args) {
  //args = [['apple', 'banana'], 2, 3, 4]
  //const args = [...args]
    if(lastArg && equalityFn(lastArg, args)) {
      return lastResult;
    }
    lastArg = fn(...args);
    return lastResult;
  };
}

