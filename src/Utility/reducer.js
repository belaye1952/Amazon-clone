import { Type } from "./action.type";

// initial state of our application, it's an object with a single property called `basket` which is an empty array
export const initialState = {
  basket: [],
};

// reducer function which takes two arguments: `state` and `action`
// `state` is the current state of our application
// `action` is an object which contains information about what has happened in our application
export const reducer = (state, action) => {
  // switch statement which checks the value of `action.type`
  switch (action.type) {
    // if the type of the action is `ADD_TO_BASKET`
    case Type.ADD_TO_BASKET:
      // return a new state by spreading the current state and adding a new item to the `basket` array
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // if the type of the action is not recognized, return the current state
    default:
      return state;
  }
};
