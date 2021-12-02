import * as types from "./types";

export function updateHistoryAction(payload) {
  return { type: types.UPDATE_HISTORY_ACTION, payload: payload };
}

export function clearHistoryAction(payload) {
  return { type: types.CLEAR_HISTORY_ACTION, payload: payload };
}
