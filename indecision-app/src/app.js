console.log('App is running');

/**
 * object for app content
 */
const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the our hands😈',
	options: []
};

/**
 *
 * Form Event
 * @param {event} e
 */
const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

/**
 * Remove-All-Button Event
 */
const removeOptions = () => {
	app.options = [];
	render();
};

/**
 * What-should-I-do?-Button Logic
 */
const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

/**
 * DOM Element
 */
const appRoot = document.getElementById('app');

/**
 * Display Changes
 */
const render = () => {
	const template = (
		<div>
			<h1>{ app.title }</h1>
			{ app.subtitle && <p>{ app.subtitle }</p> }
			<p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>

			<button disabled={app.options.length === 0 } onClick={ onMakeDecision }>
				What should I do?
			</button>
			<button onClick={ removeOptions }>Remove All</button>

			<ol>
				{
					app.options.map((option) => <li key={ option }>{ option }</li>)
				}
			</ol>

			<form onSubmit={ onFormSubmit }>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();
