import React from "react";
import { connect } from "react-redux";
import { addDigit, addDecimal, cancel, add, showResult } from "../actions";

class CalcButton extends React.Component {
  processClick = () => {
    switch (this.props.value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.props.addDigit(this.props.value);
        break;
      case ".":
        this.props.addDecimal();
        break;
      case "AC":
        this.props.cancel();
        break;
      case "+":
        this.props.add();
        break;
      case "=":
        this.props.showResult();
        break;
    }
  };

  render() {
    return (
      <div
        className={`calc-button ${this.props.buttonStyle}`}
        id={this.props.id}
        onClick={this.processClick}
      >
        {this.props.value}
      </div>
    );
  }
}

export default connect(null, { addDigit, addDecimal, cancel, add, showResult })(
  CalcButton
);
