import React from "react";
import { render, screen } from "@testing-library/react";
import Display from "../components/Display";
import { displayConstants } from "./tests.constants";

describe("Display tests", () => {
  let props1 = displayConstants.valueProps;
  let props2 = displayConstants.fullProps;

  it("can render without result and value", () => {
    render(<Display />);
    screen.getByText("Introduzca una operación");
  });

  it("con render with only value", () => {
    render(<Display {...props1} />);
    screen.getByText(props1.value);
  });

  it("can render with value and result", () => {
    render(<Display {...props2} />);
    screen.getByText(props2.value);
    screen.getByText(props2.result);
  });
});
