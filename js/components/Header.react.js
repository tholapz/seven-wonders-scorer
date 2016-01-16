var React = require('react');
var ChatConstants = require('../constants/ChatConstants');
var routes = ChatConstants.routes;

var Header = React.createClass({

	handleClick: function(targetRoute) {
		return function(e) {
			this.props.onChangeRoute(targetRoute);
		}.bind(this);
	},
	render: function() {
		if (this.props.isVisible) {
			var content = [];
			for (route in routes) {
				content.push(<a key={route} onClick={this.handleClick.call(this, route)} href="#">{route}</a>);
			}
			return <div>{content}</div>;
		}
		return null;
	}
});

module.exports = Header;