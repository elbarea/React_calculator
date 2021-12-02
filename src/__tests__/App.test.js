import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { appConstants } from "./tests.constants";

describe("App tests", () => {
  const store = appConstants.store;
  test("if rotate works as intended", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    let reverse = screen.getByText(appConstants.REVERSE);
    screen.getByText(appConstants.ONE).click();
    screen.getByText(appConstants.TWO).click();

    reverse.click();
    screen.findByText(appConstants.RES_REVERSE);
  });
  it("display numbers or symbols after click on its buttons", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.getByText(appConstants.ONE).click();
    screen.findByText(appConstants.ONE);
    screen.getByText(appConstants.PLUS).click();
    screen.findByText(appConstants.PLUS);
  });
  test("if result is displayed after click on = button", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.getByText(appConstants.THREE).click();
    screen.getByText(appConstants.MULT).click();
    screen.getByText(appConstants.FOUR).click();
    screen.getByText(appConstants.OP_1);
    screen.getByText(appConstants.EQUL).click();
    screen.getByText(appConstants.RES_1);
  });
  it("should dispatch an action on button click", () => {
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.getByText(appConstants.FIVE).click();
    screen.getByText(appConstants.MULT).click();
    screen.getByText(appConstants.FOUR).click();
    screen.getByText(appConstants.EQUL).click();
    expect(store.dispatch).toBeCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(appConstants.action);
  });
  it("should remove the operation and result after pressing clear", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.getByText(appConstants.FIVE).click();
    screen.getByText(appConstants.MULT).click();
    screen.getByText(appConstants.FOUR).click();
    screen.getByText(appConstants.EQUL).click();
    expect(screen.queryByText(appConstants.RES_2));
    screen.getByText(appConstants.CLEAR).click();
    expect(screen.queryByText(appConstants.OP_2)).toBeNull();
    expect(screen.queryByText(appConstants.RES_2)).toBeNull();
  });
});
