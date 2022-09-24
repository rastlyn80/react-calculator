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
            <div className="buttons">
              <CalcButton value="7" buttonStyle="default" />
              <CalcButton value="8" buttonStyle="default" />
              <CalcButton value="9" buttonStyle="default" />
              <CalcButton value="X" buttonStyle="orange" />
              <CalcButton value="4" buttonStyle="default" />
              <CalcButton value="5" buttonStyle="default" />
              <CalcButton value="6" buttonStyle="default" />
              <CalcButton value="-" buttonStyle="orange" />
              <CalcButton value="1" buttonStyle="default" />
              <CalcButton value="2" buttonStyle="default" />
              <CalcButton value="3" buttonStyle="default" />
              <CalcButton value="+" buttonStyle="orange" />
              <CalcButton value="0" buttonStyle="default" />
              <CalcButton value="." buttonStyle="default" />
              <CalcButton value="AC" buttonStyle="grey" />
              <CalcButton value="=" buttonStyle="grey" />
            </div>
            <Credits />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
