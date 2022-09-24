import React from "react";
import { connect } from "react-redux";

class CalcDisplay extends React.Component {
  shouldComponentUpdate(nextProps) {
    let target = document.querySelector("#display");
    if (nextProps.currentDigit.length > 11) {
      target.classList.add("smallest-font");
    } else if (nextProps.currentDigit.length > 7) {
      target.classList.add("smaller-font");
    } else {
      target.classList.remove("smallest-font", "smaller-font");
    }
    return true;
  }
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
