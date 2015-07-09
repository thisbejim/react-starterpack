var React = require('react');
var Radium = require('radium');
var AboutStore =  require('../../stores/AboutStore');

// Components

function getState() {
	return AboutStore.getState();
}

var AboutPage = React.createClass({
	getInitialState: function(){
		return getState();
	},
	componentDidMount: function() {
		AboutStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AboutStore.removeChangeListener(this._onChange);
	},
	render () {
		return (
			<div>
				<h2>{this.state.AboutMessage}</h2>
			</div>
		);
	},
	_onChange: function() {
		this.setState(getState());
	}
});

module.exports = AboutPage;