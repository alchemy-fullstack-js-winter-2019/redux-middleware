export const defaultEquality = (prevArg, nextArg) => {
  if(prevArg.length === nextArg.length) {
    return prevArg.every((arg, i) => arg === nextArg[i]);
  }
  return false;
};
