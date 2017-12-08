import React, { Component } from 'react';
import './App.css';
import ThisProof, {doWork, doWork2} from "./ThisProof"
import MainPage from "./Pages/MainPage"
import "./TestFunctions"
import {m3} from "./Kitchen"
import Microwave from "./Microwave"

class App extends Component {
  constructor() {
    super()

    this.doSomeWork = this.doSomeWork.bind(this)
  }

  componentDidMount() {
    console.log(Microwave)
    Microwave.plugIn(m3)
    console.log(m3)
    console.log("App.js Microwave Global Count", Microwave.globalCount)

    const thisProof = new ThisProof()
    thisProof.doThis()
    thisProof.doThisToo()
    doWork()
    doWork2()

    const doWork3 = doWork2.bind(this)
    doWork3()
  }

  doSomeWork() {
    console.log("doSomeWork", this)
  }
  doSomeWorkUnbound() {
    console.log("doSomeWork", this)
  }


  render() {
    return (
      <div className="App">
      <div>
        Using Arrow Functions
        <button onClick={()=> {
            this.doSomeWork()
          }}>Click Me</button>
      </div>
      <div>
        Using `function` keyword
        <button onClick={ this.doSomeWorkUnbound }>Click Me: Unbound</button>
        <button onClick={ this.doSomeWork.bind(this) }>Click Me: Bound</button>
        </div>
        <MainPage value={6} content="some content here" />
      </div>
    );
  }
}

export default App;
