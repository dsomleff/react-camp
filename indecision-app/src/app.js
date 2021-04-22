/**
 * Main Component
 */
class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision App';
		const subtitle = 'Put your life in the our hands😈';
		const options = ['one', 'two', 'Dusya'];

		return (
			<div>
				<Header title={ title } subtitle={ subtitle } />
				<Action />
				<Options options={ options }/>
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
	handlePick() {
		alert('Handle Pick');
	}

	render() {
		return (
			<div>
				<button onClick={ this.handlePick }>What should I do?</button>
			</div>
		);
	}
}

/**
 * List of Options Component
 */
class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}

	handleRemoveAll() {
		console.log(this.props.options);
		// alert('OOOO');
	}

	render() {
		return (
			<div>
				<button onClick={ this.handleRemoveAll }>Remove All</button>
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
				Option: { this.props.optionText }
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
