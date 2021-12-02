import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

export const appConstants = {
  store: mockStore({ history: [] }),
  CLEAR: "Clear",
  REVERSE: "R",
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  PLUS: "+",
  MULT: "*",
  EQUL: "=",
  OP_1: "3*4",
  OP_2: "5*4",
  RES_1: "12",
  RES_2: "20",
  RES_REVERSE: "21",
  action: {
    type: "UPDATE_HISTORY_ACTION",
    payload: { operation: "5*4", result: 20 }
  }
};

export const displayConstants = {
  valueProps: { value: "5+2*7" },
  fullProps: { value: "6+2*7", result: "20" }
};

export const historyConstants = {
  storeEmpty: mockStore({ history: [] }),
  storeFull: mockStore({ history: [{ operation: "3+3", result: 6 }] }),
  TEXT_1: "Operación: 3+3",
  TEXT_2: "Resultado: 6",
  CLEAN: "Limpiar",
  action: {
    type: "CLEAR_HISTORY_ACTION",
    payload: undefined
  }
};
