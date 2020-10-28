import reducer from "./redux/reducer.js";
import {actionDecrement, actionIncrement} from "./redux/actions.js";
import {createStore} from "./redux/store.js";

const countElem = document.getElementById('count');
const incrementElem = document.getElementById('increment');
const decrementElem = document.getElementById('decrement');

const initialState = {
  count: 0,
}

const store = createStore(reducer, initialState);

store.subscribe(() => {
  const {count} = store.getState();
  countElem.innerHTML = count;
});

incrementElem.addEventListener('click', () => {
  store.dispatch(actionIncrement());
});

decrementElem.addEventListener('click', () => {
  store.dispatch(actionDecrement());
});
