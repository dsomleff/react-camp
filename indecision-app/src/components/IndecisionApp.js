import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

/**
 * Main Component
 */
export default class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: []
		};
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
	}

	// Build-in React Component Method
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options }));
			}
		} catch(e) {
			// Do nothing at all
		}
	}

	// Build-in React Component Method
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	// Build-in React Component Method
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	// For change state in Options Component
	// to reverse data flow
	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	}

	// Remove single option
	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	}

	// For change state in Action Component
	// to reverse data flow
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	// For change state in Add Oprion Component
	// to pass data upstream from child
	// to parent Component
	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value to add Option';
		} else if(this.state.options.indexOf(option) > -1) {
			return 'This Option already exist';
		}

		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
	}

	// App Render Function
	render() {
		const subtitle = 'Put your life in the our hands😈';

		return (
			<div>
				<Header subtitle={ subtitle } />
				<Action
					hasOptions={ this.state.options.length > 0 }
					handlePick={ this.handlePick }
				/>
				<Options
					options={ this.state.options }
					handleDeleteOptions={ this.handleDeleteOptions }
					handleDeleteOption={ this.handleDeleteOption }
				/>
				<AddOption
					handleAddOption={ this.handleAddOption }
				/>
			</div>
		);
	}
}
