import React from "react";
import { connect } from "react-redux";

class CalcDisplay extends React.Component {
  render() {
    return (
      <div className="calc-display">
        <div id="display">{this.props.currentDigit}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentDigit: state.calculator.currentDigit,
  };
};

export default connect(mapStateToProps)(CalcDisplay);
