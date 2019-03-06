import React from 'react';


function defaultEqaulity(prevArguments, nextArguments) {
  return prevArguments.length === nextArguments.length &&
    prevArguments.every((arg, i) => { 
    return arg === nextArguments[i];
  });
}

//.every returns true if all are the true or false if all are false

function memoize(fn, equalityFn = defaultEquality) {
  let lastArguments = null; //this will store the last argument
  let lastResult = null; //these two cache previous 

 return function(...currentArguments) { //this function is memoize function. want to grab the current arguments
  //current arguments are the arguments being passed - [1, 2, 3] 
  const args = [...arguments];
   if(lastArguments && defaultEqaulity(lastArguments, currentArguments)) { //if have last arguments and last arguments and current arguments are equal return last result
     return lastResult;
   }
   lastArguments = currentArguments;
   //fn(1, 2, 3)
   lastResult = fn(...currentArguments); //this recommuntes function if lastresults change - set last result to result called with function current arguments

   return lastResult;
 };
}

