import React, { Component } from "react";
import "./App.css";
import FictionButton from "./Components/FictionButton.js";
import NonfictionButton from "./Components/NonfictionButton";

export class App extends Component {
  render() {
    return (
      <div>
        <FictionButton />
        <NonfictionButton />
      </div>
    );
  }
}

export default App;
