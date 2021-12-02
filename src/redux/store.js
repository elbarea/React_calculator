import { createStore } from "redux";
import * as types from "./types";

const initialState = {
  history: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_HISTORY_ACTION:
      return { ...state, history: [action.payload, ...state.history] };
    case types.CLEAR_HISTORY_ACTION:
      return { ...state, history: [] };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
