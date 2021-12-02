import React from "react";
import { render, screen } from "@testing-library/react";
import History from "../components/History";
import { Provider } from "react-redux";
import { historyConstants } from "./tests.constants";

describe("History tests", () => {
  it("renders title", () => {
    render(
      <Provider store={historyConstants.storeEmpty}>
        <History />
      </Provider>
    );
    screen.getByText("Historial de operaciones");
  });

  it("renders entries from tedux state", () => {
    render(
      <Provider store={historyConstants.storeFull}>
        <History />
      </Provider>
    );
    screen.getByText(historyConstants.TEXT_1);
    screen.getByText(historyConstants.TEXT_2);
  });
  it("renders button Limpiar", () => {
    render(
      <Provider store={historyConstants.storeFull}>
        <History />
      </Provider>
    );
    screen.getByText(historyConstants.CLEAN);
  });
  it("should dispatch an action on button click", () => {
    historyConstants.storeFull.dispatch = jest.fn();
    render(
      <Provider store={historyConstants.storeFull}>
        <History />
      </Provider>
    );
    let button = screen.getByText(historyConstants.CLEAN);
    button.click();
    expect(historyConstants.storeFull.dispatch).toBeCalledTimes(1);
    expect(historyConstants.storeFull.dispatch).toHaveBeenCalledWith(
      historyConstants.action
    );
  });
});
