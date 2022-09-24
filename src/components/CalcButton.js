import React from "react";

class CalcButton extends React.Component {
  render() {
    return (
      <div className={`calc-button ${this.props.buttonStyle}`}>
        {this.props.value}
      </div>
    );
  }
}

export default CalcButton;
