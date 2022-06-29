import { ADD_TODO, DELETE_TODO } from "./action";

export const reducerFn = (state, action) => {
  if (action.type === ADD_TODO) {
    return [...state, action.payload];
  }
  if (action.type === DELETE_TODO) {
    return state.filter((obj) => obj.id !== action.payload);
  }
};
