export function defaultEquality(prevArgs, CurrentArgs) {
  return prevArgs.every((arg, i) => {
    //the every method returns true or false if every arg is the same
    return arg === CurrentArgs[i];
  });
}


///...agruments takes however many agruments that get pass through. 
//set equalityFn = defaultyEquality because ... 
export function memoize(fn, equalityFn = defaultEquality){
  let lastArg = null;
  let lastResult = null;

  return function(...currentArguments) {
    if(lastArg && equalityFn(lastArg, currentArguments)){
      return lastArg;
    }
    lastArg = currentArguments;
    lastResult - fn(...currentArguments);
    return lastResult;
  };
}
