/**
 * Main Component
 */
class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: ['one111', 'two', 'Dusya']
		};
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
	}

	/**
	 * For change state in Options Component
	 * to pass data upstream from child
	 * to parent Component
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
				<AddOption />
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
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();

		if (option) {
			alert(option);
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={ this.handleAddOption }>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

/** Usage Components Section */
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
