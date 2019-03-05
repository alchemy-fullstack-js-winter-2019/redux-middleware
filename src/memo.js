export function defaultEquality(prevArgs, nextArgs) {
  return prevArgs.length === nextArgs.length &&
  prevArgs.every((arg, i) => {
    return arg === nextArgs[i];
  })
}

export function reactPropsEquality(props, prevProps) {
  const newProps = Object.keys(props);
  const oldProps = Object.keys(prevProps);
  return newProps.length === oldProps.length && oldProps.every((prop, i) => {
    return prop === newProps[i];
  })
}
