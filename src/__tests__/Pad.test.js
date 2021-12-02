import React from "react";
import { render, screen } from "@testing-library/react";
import { buttons } from "../components/Pad/constants";
import Pad from "../components/Pad";

describe("Pad tests", () => {
  it("Renders all buttons", () => {
    render(<Pad />);
    buttons.map((button) => screen.getByText(button.id));
  });
});
