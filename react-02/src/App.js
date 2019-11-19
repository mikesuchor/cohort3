import React from 'react';
import Icon from './components/Icon';
import Home from './components/Home';
import Game from './components/TicTacToe/Game';
import smartphone from './smartphone.svg';
import tictactoe from './tictactoe.svg';
import './App.css';

class App extends React.Component {
  	constructor() {
    	super();
    	this.state = {
      		clickedIcon: null
    	}
  	};

  	clickIcon = (icon) => {
    	this.setState({
    	  	clickedIcon: icon,
    	});
  	};

  	iconArr = [smartphone, tictactoe];

	createIcons = () => {
		return this.iconArr.map((icon) => {
			return <Icon key={icon} name={icon} clickIcon={this.clickIcon} />
		})
	}

 	render() {
		return (
			<div className="App">
				{this.createIcons()}
				{this.state.clickedIcon===tictactoe ? <Home /> : <Game />}
			</div>
		);
  	}
}

export default App;