import { ADD, REMOVE } from "./actions";
export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [action.task, ...state];
    case REMOVE:
      let index = state.indexOf(action.task);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length),
      ];
    default:
      return state;
  }
};
