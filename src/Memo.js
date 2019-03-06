export function defaultEquality(prevArguements, nextArguements) {
  return prevArguements.length === nextArguements.length &&
         prevArguements.every((arg, i) => {
            return arg === nextArguements[i];
         });
}

export function memoize(fn, equalityFn = defaultEquality) {
  let lastArgs = null;
  let lastResult = null;

  return function(...currentArguements) {
    if(lastArgs && equalityFn(lastArgs, currentArguements)) {
      return lastResult;
    }

    lastArgs = currentArguements;
    lastResult = fn(...currentArguements);

    return lastResult;
  }



}
