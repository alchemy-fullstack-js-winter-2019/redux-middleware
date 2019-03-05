export const areEqual = (prevArg, nextArg) => {
    return prevArg.length === nextArg.length &&
        prevArg.every((arg, i)  => {
        return arg === nextArg[i]
    });
};

export const memoize = (fn, equal = areEqual) => {
    let prevArg = null;
    let result = null
    return function(...args){
        if(prevArg && equal(prevArg, args)){
            return result;
        }
        prevArg = args;
        result = fn(...args);
        return result
    };
};