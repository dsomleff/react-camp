/**
 * Main Component
 */
class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: []
		};
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
	}

	/**
	 * For change state in Options Component
	 * to reverse data flow
	 */
	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: []
			};
		});
	}

	/**
	 * For change state in Action Component
	 * to reverse data flow
	 */
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	/**
	 * For change state in Add Oprion Component
	 * to pass data upstream from child
	 * to parent Component
	 */
	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value to add Option';
		} else if(this.state.options.indexOf(option) > -1) {
			return 'This Option already exist';
		}

		this.setState((prevState) => {
			return {
				options: prevState.options.concat(option)
			};
		});
	}

	/**
	 * App Render Function
	 */
	render() {
		const title = 'Indecision App';
		const subtitle = 'Put your life in the our hands😈';

		return (
			<div>
				<Header title={ title } subtitle={ subtitle } />
				<Action
					hasOptions={ this.state.options.length > 0 }
					handlePick={ this.handlePick }
				/>
				<Options
					options={ this.state.options }
					handleDeleteOptions={ this.handleDeleteOptions }
				/>
				<AddOption
					handleAddOption={ this.handleAddOption }
				/>
			</div>
		);
	}
}

/**
 * Header Component
 */
class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{ this.props.title }</h1>
				<h2>{ this.props.subtitle }</h2>
			</div>
		);
	}
}

/**
 * Button Component
 */
class Action extends React.Component {
	render() {
		return (
			<div>
				<button
					onClick={ this.props.handlePick }
					disabled={ !this.props.hasOptions }
				>
					What should I do?
				</button>
			</div>
		);
	}
}

/**
 * List of Options Component
 */
class Options extends React.Component {
	render() {
		return (
			<div>
				<button onClick={ this.props.handleDeleteOptions }>Remove All</button>
					{
						this.props.options.map((option) => <Option key={ option } optionText={ option } />)
					}
			</div>
		);
	}
}

/**
 * Single Option Component
 */
class Option extends React.Component {
	render() {
		return (
			<div>
				{ this.props.optionText }
			</div>
		);
	}
}

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

		this.setState(() => {
			return {
				error // this is equal next error: error
			};
		});
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
