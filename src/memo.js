export function defaultEquality(prevArgs, nextArgs) {
  return prevArgs.every((arg, i)=> {
    return arg === nextArgs[i];
  })
}
