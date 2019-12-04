import React from 'react';
import Icon from './components/Icon';
import Home from './components/Home';
import MessageHandler from './components/MessageHandler';
import Game from './components/TicTacToe/Game';
import AccountsMain from './components/Accounts/AccountsMain';
import Cities from './components/Cities/Cities';
import { faHome, faTh, faUniversity, faCity } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends React.Component {
  	constructor() {
    	super();
    	this.state = {
			  clickedIcon: null,
			  message: ""
    	}
  	};

  	clickIcon = (icon) => {
    	this.setState({
    	  	clickedIcon: icon,
    	})
  	};

  	iconArr = [faHome, faTh, faUniversity, faCity];

	generateIcons = () => {
		return this.iconArr.map((icon) => {
			return <Icon key={icon.iconName} name={icon} clickIcon={this.clickIcon} />
		})
	}

	displayMessage = (message) => {
		this.setState({
			message: message
		});
	}

	selectPage = () => {
		switch(this.state.clickedIcon) {
			case faHome:
				return <Home />
			case faTh:
				return <Game />
			case faUniversity:
				return <AccountsMain displayMessage={this.displayMessage} />
			case faCity:
				return <Cities displayMessage={this.displayMessage} />
			default:
				return <Home/ >
		}
	}

 	render() {
		return (
			<div className="App">
				<MessageHandler message={this.state.message} />
				<div id="apps">
					<div className="navbar">
						{this.generateIcons()}
					</div>
					{this.selectPage()}
				</div>
			</div>
		)
  	}
}

export default App;