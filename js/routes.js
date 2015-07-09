var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var About = require("./components/about/AboutPage");
var Home = require("./components/home/HomePage");

// Home page controller
var HomePage = React.createClass({
	render () {
		return (
			<Home />
		);
	}
});

// About page controller
var AboutPage = React.createClass({
	render () {
		return (
			<About />
		);
	}
});


var routes = (
	<Route handler={App}>
		<Route path="/" handler={HomePage}/>
		<Route path="/about" handler={AboutPage}/>
	</Route>
);

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	render () {
		return (
			<div>
				<h1>App</h1>
				<RouteHandler/>
			</div>
		)
	}
});

Router.run(routes, Router.HashLocation, (Root) => {
	React.render(<Root/>, document.getElementById('content'));
});