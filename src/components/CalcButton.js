import React from "react";
import { connect } from "react-redux";
import { addDigit } from "../actions";

class CalcButton extends React.Component {
  processClick = () => {
    this.props.addDigit(this.props.value);
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

export default connect(null, { addDigit })(CalcButton);
