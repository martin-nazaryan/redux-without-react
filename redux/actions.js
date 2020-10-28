import {DECREMENT, INCREMENT} from "./actionTypes.js";

export const actionIncrement = () => ({
  type: INCREMENT
});

export const actionDecrement = () => ({
  type: DECREMENT
});
