'use strict';
var React = require('react');
var ChatConstants = require('../constants/ChatConstants');
var routes = ChatConstants.routes;

var routable = function(Component) {
	var routableComponent = React.createClass({
		getInitialState: function() {
			return {
				route: routes.MAIN
			};
		},

		handleChangeRoute: function(route_name) {
			this.setState({route: route_name});
		},

		render: function() {
			return <Component
				onChangeRoute={this.handleChangeRoute}
				route={this.state.route}
				{...this.props}
			/>;
		}
	});
	return routableComponent;
}

module.exports = routable;