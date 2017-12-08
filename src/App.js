import React, { Component } from 'react';
import './App.css';
import MainPage from "./Pages/MainPage"
import "./TestFunctions"
import {m3} from "./Kitchen"
import Microwave from "./Microwave"

class App extends Component {
  componentDidMount() {
    console.log(Microwave)
    Microwave.plugIn(m3)
    console.log(m3)
    console.log("App.js Microwave Global Count", Microwave.globalCount)
  }

  render() {
    return (
      <div className="App">
        <MainPage value={6} content="some content here" />
      </div>
    );
  }
}

export default App;
