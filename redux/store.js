export function createStore(reducer, preloadedState = {}) {
  let state = reducer(preloadedState, {type: "__INIT__"});
  const listeners = [];

  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(fn => fn());
    },
    subscribe(fn) {
      !listeners.length && fn();

      listeners.push(fn);
    }
  };

  store.dispatch({type: "__INIT__"});

  return store;
}
