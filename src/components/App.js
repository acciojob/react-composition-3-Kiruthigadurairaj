import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <Tooltip text="This is a tooltip!">
        <h2>Hover over me</h2>
      </Tooltip>
      <Tooltip text="This is another tooltip!">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
