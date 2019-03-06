export function defaultEquality(prevArguments, nextArgument){
  return prevArguments.length === nextArgument.length &&
    prevArguments.every((arg, i) => {
      return arg === nextArguments[i];
    });
}

export function memoize(fn, equalityFn = defaultEquality) {
  
}
