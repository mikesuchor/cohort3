import React from 'react';
import logo from './logo.svg';
import ladybug from './ladybug.png'
import lizard from './lizard.png'
import parrot from './parrot.png'
import peacock from './peacock.png'
import shark from './shark.png'
import trex from './trex.png'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedIcon: "_____"
    }
  };

  clickIcon = (icon) => {
    this.setState({
      clickedIcon: icon
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <h2>The last clicked icon was {this.state.clickedIcon}</h2>
        <img src={ladybug} className="icons" alt="ladybug" onClick={() => this.clickIcon("ladybug")} />
        <img src={lizard} className="icons" alt="lizard" onClick={() => this.clickIcon("lizard")} />
        <img src={parrot} className="icons" alt="parrot" onClick={() => this.clickIcon("parrot")} />
        <img src={peacock} className="icons" alt="peacock" onClick={() => this.clickIcon("peacock")} />
        <img src={shark} className="icons" alt="shark" onClick={() => this.clickIcon("shark")} />
        <img src={trex} className="icons" alt="trex" onClick={() => this.clickIcon("trex")} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h6>Icons by <a href="http://www.icons8.com">icons8</a></h6>
      </div>
    );
  }
}

export default App;
