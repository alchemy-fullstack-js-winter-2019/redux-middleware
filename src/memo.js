export function defaultEquality(prevArguments, nextArguments) {
  //return true is prev and next are the same
  return prevArguments.length === nextArguments.length &&
  prevArguments.every((argument, i) => {
    return argument === nextArguments[i];
  });
}

function memoize(fnToMemoize, defaultEquality) {

}
