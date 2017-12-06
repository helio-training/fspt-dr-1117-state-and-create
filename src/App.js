import React, { Component } from 'react';
import './App.css';
import MainPage from "./Pages/MainPage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage value={6} content="some content here" />
      </div>
    );
  }
}

export default App;
