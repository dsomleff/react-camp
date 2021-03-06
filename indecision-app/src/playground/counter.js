class Counter extends React.Component {
	/**
	 * @param {default} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	/**
	 * @param {number} prevProps
	 * @param {*} prevState
	 */
	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count', this.state.count);
		}
	}

	/**
	 * Build-in React Component Method
	 */
	componentDidMount() {
		const json = localStorage.getItem('count');
		const count = parseInt(JSON.parse(json), 10);

		if (!isNaN(count)) {
			this.setState(() => ({ count }));
		}
	}

	/**
	 * Increase Counter
	 */
	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}

	/**
	 * Decrease Counter
	 */
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}

	/**
	 * Hard Reset
	 */
	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});

		// this.setState((prevState) => {
		// 	return {
		// 		count: prevState.count + 1
		// 	};
		// });

		// Problem if we pass the strictly the object instead of the function
		// this.setState({
		// 	count:0
		// });
		// this.setState({
		// 	count: this.state.count + 1
		// });
	}

	/**
	 * Component Usage
	 * @returns html
	 */
	render() {
		return (
			<div>
				<h1>Count: { this.state.count }</h1>
				<button onClick={ this.handleAddOne }>+</button>
				<button onClick={ this.handleMinusOne }>-</button>
				<button onClick={ this.handleReset }>Reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));
