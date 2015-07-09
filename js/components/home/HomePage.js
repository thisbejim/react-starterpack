var React = require('react');
var Radium = require('radium');
var HomeStore =  require('../../stores/HomeStore');

// Components

function getState() {
	return HomeStore.getState();
}

var HomePage = React.createClass({
	getInitialState: function(){
		return getState();
	},
	componentDidMount: function() {
		HomeStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		HomeStore.removeChangeListener(this._onChange);
	},
	render () {
		return (
			<div>
				<h2>{this.state.HomeMessage}</h2>
			</div>
		);
	},
	_onChange: function() {
		this.setState(getState());
	}
});

module.exports = HomePage;