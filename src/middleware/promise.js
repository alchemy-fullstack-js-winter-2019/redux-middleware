export const isPromise = payload => {
  return Promise.resolve(payload) === payload;
};


