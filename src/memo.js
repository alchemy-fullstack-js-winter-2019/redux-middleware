export function defaultEquality(prevArgs, nextArgs) {
  return prevArgs.length === nextArgs.length &&
  prevArgs.every((arg, i)=> {
    return arg === nextArgs[i];
  })
}
