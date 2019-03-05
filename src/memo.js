export const defaultEquality = (prevArg, nextArg) => {
  if(prevArg.length === nextArg.length) {
    for(let i = 0; i < prevArg.length; i++) {
      if(prevArg[i] !== nextArg[i]) return false;
    }

    return true;
  }
  return false;
};
