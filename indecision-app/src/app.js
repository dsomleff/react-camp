console.log('App is running');

//JSX - JavaScript XML
let app = {
	title: 'Indecision App',
	subtitle: 'Some info',
	options: ['One', 'Two']
};

let template = (
	<div>
	<h1>{ app.title }</h1>
		{ app.subtitle && <p>{ app.subtitle }</p> }
		<p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

let user = {
	name: 'JuJu',
	age: 18,
	location: 'Ku'
};

const getLocation = location => {
	if (location) {
		return <p>Location: { location }</p>;
	}
};

let templateTwo = (
	<div>
		<h1>{ user.name ? user.name : 'Anonymous' }</h1>
		{ (user.age && user.age >= 18 )&& <p>Forever { user.age }</p> }
		{ getLocation(user.location) }
	</div>
);
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
