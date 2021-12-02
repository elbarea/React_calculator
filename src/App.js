import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./styles.css";
import Display from "./components/Display";
import Pad from "./components/Pad";
import History from "./components/History";
import symbols from "./constants";
import { connect } from "react-redux";
import { updateHistoryAction } from "./redux/actions";

function App(props) {
  const [value, updateValue] = useState("");
  const [result, updateResult] = useState("");

  const rotate = (str) => {
    let arr = str.split("");
    arr.push(arr.shift());
    return arr.join("");
  };

  const handleClick = (val) => {
    let operation = value;
    if (val === symbols.reverse) {
      updateValue(rotate(operation));
    } else if (val === symbols.equal) {
      try {
        let res = operation.replaceAll(symbols.percent, "/100");
        res = evaluate(res);
        if (isNaN(res)) {
          updateValue("Error");
        } else {
          props.updateHistoryAction({ operation: operation, result: res });
          updateResult(res);
        }
      } catch (error) {
        updateValue("Error");
      }
    } else if (val === symbols.clear) {
      updateResult("");
      updateValue("");
    } else {
      updateValue(value + val);
    }
  };
  return (
    <div className="App">
      <h1>Hello Candidates</h1>
      <h2>Welcome to the Inditex Challenge!</h2>
      <div className="calculator">
        <History />
        <Display result={result} value={value} />
        <Pad handleClick={handleClick} />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateHistoryAction: (entry) => {
    dispatch(updateHistoryAction(entry));
  }
});

export default connect(null, mapDispatchToProps)(App);
