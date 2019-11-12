import React from 'react';
import Home from './components/Home';
import Game from './components/Game';
import smartphone from './smartphone.svg';
import tictactoe from './tictactoe.svg';
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
          <img src={smartphone} className="icon" alt="smartphone" onClick={() => this.clickIcon("smartphone")} />
          <img src={tictactoe} className="icon" alt="tictactoe" onClick={() => this.clickIcon("tictactoe")} />
          {this.state.clickedIcon==="tictactoe" ? <Home /> : <Game />}
        </div>
    );
  }
}

export default App;
