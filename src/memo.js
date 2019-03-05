export const defaultEquality = (prevArguments, newArguments) => {
  for(let i = 0; i < prevArguments.length; i++) {
    if(prevArguments[i] !== newArguments[i]) return false;
  }
  return true;
};


