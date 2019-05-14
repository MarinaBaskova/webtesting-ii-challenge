import React from 'react';
import { className } from 'postcss-selector-parser';

function Dashboard(props) {
	return (
		<div>
			<button onClick={props.hit}>Hit</button>
			<button onClick={props.foul}>Foul</button>
			<button onClick={props.strike}>Strike</button>
			<button onClick={props.ball}>Ball</button>
		</div>
	);
}

export default Dashboard;
