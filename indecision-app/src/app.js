/**
 * Header Component
 */
class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Indecision App</h1>
				<h2>Put your life in the our hands😈</h2>
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
				<button>What should I do?</button>
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
				<h3>Options Component Here!</h3>
			</div>
		);
	}
}

/**
 * Form Component
 */
class AddOption extends React.Component {
	render() {
		return (
			<div>
				<h3>AddOption Component Here!</h3>
			</div>
		);
	}
}

/** Usage Component Section */
const jsx = (
	<div>
		<Header />
		<Action />
		<Options />
		<AddOption />
	</div>
);

ReactDOM.render(jsx, document.getElementById('app'));
