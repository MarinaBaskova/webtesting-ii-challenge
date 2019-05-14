import React from 'react';
import Display from './Display';
import Dashboard from './Dashboard';
import './App.css';

class App extends React.Component {
	state = {
		strikes: 0,
		balls: 0
	};

	hit = () => {
		this.setState({
			strikes: 0,
			balls: 0
		});
	};

	foul = () => {
		this.setState((prevState) => ({
			strikes: prevState.strikes < 2 ? prevState.strikes + 1 : prevState.strikes
		}));
	};

	strike = () => {
		this.setState((prevState) => ({
			strikes: prevState.strikes < 2 ? prevState.strikes + 1 : 0,
			balls: prevState.strikes < 2 ? prevState.balls + 1 : 0
		}));
	};

	ball = () => {
		this.setState((prevState) => ({
			strikes: prevState.balls < 3 ? prevState.strikes + 1 : 0,
			balls: prevState.balls < 3 ? prevState.balls + 1 : 0
		}));
	};

	render() {
		return (
			<div className="App">
				<Display strikes={this.state.strikes} balls={this.state.balls} />
				<Dashboard hit={this.hit} foul={this.foul} strike={this.strike} ball={this.ball} />
			</div>
		);
	}
}

export default App;
