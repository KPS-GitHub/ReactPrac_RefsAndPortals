import React from "react";
import ReactDOM from "react-dom";
import Colorizer from "./Colorizer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Colorizer</h1>
      <Colorizer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
