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
        // add the item to the basket array, by spreading the current state and adding a new item to the end of the array
        // the syntax [...state.basket, action.item] is called the spread operator, it takes the current array and add a new item to the end of it
        // for example if the current state is { basket: [item1, item2] } and the action.item is item3, the new state will be { basket: [item1, item2, item3] }
        basket: [...state.basket, action.item],
      };

    // if the type of the action is not recognized, return the current state
    default:
      return state;
  }
};
