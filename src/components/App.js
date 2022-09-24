import React from "react";
import CalcButton from "./CalcButton";
import CalcDisplay from "./CalcDisplay";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <CalcDisplay />
          <CalcButton />
        </div>
      </div>
    );
  }
}

export default App;
