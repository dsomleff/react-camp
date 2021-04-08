console.log('App is running');

//JSX - JavaScript XML
let app = {
	title: 'Indecision App',
	subtitle: 'Some info'
};

let template = (
	<div>
	<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
