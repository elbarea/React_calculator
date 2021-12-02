import React from "react";
import "./Pad.css";
import { buttons } from "./constants";

export default function Pad(props) {
  return (
    <div className="pad">
      {buttons.map((button) => (
        <div
          className="button"
          id={button.id}
          key={button.id}
          onClick={() => props.handleClick(button.value)}
        >
          {button.value}
        </div>
      ))}
    </div>
  );
}
