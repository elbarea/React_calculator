import React from "react";
import "./History.css";
import { connect } from "react-redux";
import { clearHistoryAction } from "../../redux/actions";

function History(props) {
  return (
    <div className="history">
      <span className="defaultText">Historial de operaciones</span>
      {props.history.reverse().map((entry, index) => (
        <div className="entry" key={index}>
          <span>Operación: {entry.operation}</span>
          <span>Resultado: {entry.result}</span>
        </div>
      ))}
      {props.history.length > 0 ? (
        <button className="clearButton" onClick={props.clearHistory}>
          Limpiar
        </button>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { history: state.history };
};

const mapDispatchToProps = (dispatch) => ({
  clearHistory: () => {
    dispatch(clearHistoryAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
