import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

/**
 * Main Component
 */
export default class IndecisionApp extends React.Component {
	state = {
			options: [],
			selectedOption: undefined
	};

	// For change state in Options Component
	// to reverse data flow
	handleDeleteOptions = () => this.setState(() => ({ options: [] }));

	// Remove single option
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	};

	// For change state in Action Component
	// to reverse data flow
	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({
			selectedOption: option
		}));
	};

	// Close Modal Window button logic
	handleClearSelectedOption = () => this.setState(() => ({ selectedOption: undefined }));

	// For change state in Add Oprion Component
	// to pass data upstream from child
	// to parent Component
	handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to add Option';
		} else if(this.state.options.indexOf(option) > -1) {
			return 'This Option already exist';
		}

		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
	};

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

	// App Render Function
	render() {
		const subtitle = 'Put your life in the hands of us😈';

		return (
			<div>
				<Header subtitle={ subtitle } />

				<div className="container">
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

				<OptionModal
					selectedOption={ this.state.selectedOption }
					handleClearSelectedOption={ this.handleClearSelectedOption }
				/>
			</div>
		);
	}
}
