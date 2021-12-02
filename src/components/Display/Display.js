import React from "react";
import "./Display.css";

export default function Display(props) {
  return (
    <div className="display">
      {props.result || props.value ? (
        <div className="operations">
          <h2 className="results">{props.result}</h2>
          <h3 className="results">{props.value}</h3>
        </div>
      ) : (
        <span className="defaultText">Introduzca una operación</span>
      )}
    </div>
  );
}
