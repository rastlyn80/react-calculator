import React from "react";
import CalcButton from "./CalcButton";
import CalcDisplay from "./CalcDisplay";
import Credits from "./Credits";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>The React Calculator</h1>
          <h5>inspired by the iPhone Calculator</h5>
          <div className="main">
            <CalcDisplay />
            <CalcButton value="AC" buttonStyle="cancel" id="clear" />
            <div className="buttons">
              <CalcButton value="7" buttonStyle="default" id="seven" />

              <CalcButton value="8" buttonStyle="default" id="eight" />
              <CalcButton value="9" buttonStyle="default" id="nine" />
              <CalcButton value="÷" buttonStyle="orange" id="divide" />

              <CalcButton value="4" buttonStyle="default" id="four" />
              <CalcButton value="5" buttonStyle="default" id="five" />
              <CalcButton value="6" buttonStyle="default" id="six" />
              <CalcButton value="x" buttonStyle="orange" id="multiply" />

              <CalcButton value="1" buttonStyle="default" id="one" />
              <CalcButton value="2" buttonStyle="default" id="two" />
              <CalcButton value="3" buttonStyle="default" id="three" />
              <CalcButton value="-" buttonStyle="orange" id="subtract" />

              <CalcButton value="0" buttonStyle="default" id="zero" />
              <CalcButton value="." buttonStyle="default" id="decimal" />
              <CalcButton value="=" buttonStyle="grey" id="equals" />
              <CalcButton value="+" buttonStyle="orange" id="add" />
            </div>
            <Credits />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
