import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import App from './App';

describe('<App />', () => {
	it('renders without crashing', () => {
		render(<App />);
	});
	// strikes
	it('should successfully strike', () => {
		const { getByText, getAllByText } = render(<App />);
		const button = getByText('Strike');
		fireEvent.click(button);
		getAllByText(/1/)[1];
	});
	it('should successfully reset strike', () => {
		const { getByText, getAllByText } = render(<App />);
		const button = getByText('Strike');
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		getAllByText(/0/)[1];
	});
	// balls
	it('should successfully balls', () => {
		const { getByText, getAllByText } = render(<App />);
		const button = getByText('Ball');
		fireEvent.click(button);
		getAllByText(/1/)[1];
	});
	it('should successfully reset balls', () => {
		const { getByText, getAllByText } = render(<App />);
		const button = getByText('Ball');
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		getAllByText(/0/)[1];
	});
	// foul
	it('should successfully fouls', () => {
		const { getByText } = render(<App />);
		const button = getByText(/Foul/i);
		fireEvent.click(button);
		fireEvent.click(button);
		getByText(/2/);
	});
	// hit
	it('should successfully hit and reset strikes and balls', () => {
		const { getByText, getAllByText } = render(<App />);
		const button = getByText(/Hit/i);
		fireEvent.click(button);
		getAllByText(/0/);
	});
});
