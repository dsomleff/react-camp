/**
 * Main Component
 */
class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: props.options
		};
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
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
IndecisionApp.defaultProps = {
	options: []
};

/**
 * Header Functional Component
 */
const Header = (props) => {
	return (
		<div>
			<h1>{ props.title }</h1>
			{ props.subtitle && <h2>{ props.subtitle }</h2> }
		</div>
	);
};
Header.defaultProps = {
	title: 'Indecision App'
};

/**
 * <What should I do?> Button Functional Component
 */
const Action = (props) => {
	return (
		<div>
			<button
				onClick={ props.handlePick }
				disabled={ !props.hasOptions }
			>
				What should I do?
			</button>
		</div>
	);
};

/**
 * List of Options Functional Component
 */
const Options = (props) => {
	return (
		<div>
			<button onClick={ props.handleDeleteOptions }>Remove All</button>
				{
					props.options.map((option) => (
						<Option
						key={ option }
						optionText={ option }
						handleDeleteOption={ props.handleDeleteOption }
					/>
					))
				}
		</div>
	);
};

/**
 * Single Option Functional Component
 */
const Option = (props) => {
	return (
		<div>
			{ props.optionText }
			<button
				onClick={ () => {
					props.handleDeleteOption(props.optionText);
				} }
			>
				Remove
			</button>
		</div>
	);
};

/**
 * Form Component
 */
class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}

	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => ({
			error // this is equal next error: error
		}));
	}

	render() {
		return (
			<div>
				<form onSubmit={ this.handleAddOption }>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
				{ this.state.error && <p>{ this.state.error }</p> }
			</div>
		);
	}
}

/** Usage Components Section */
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
