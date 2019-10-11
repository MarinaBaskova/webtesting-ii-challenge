import React from 'react';

function Display(props) {
	return (
		<div className="score">
			<div className="strikes">
				<h4>Strikes</h4>
				<p>{props.strikes}</p>
			</div>
			<div className="balls">
				<h4>Balls</h4>
				<p>{props.balls}</p>
			</div>
		</div>
	);
}

export default Display;
