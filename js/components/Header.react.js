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
			return <div>
				<a onClick={this.handleClick.call(this, routes.MILITARY)} href="#">Military</a>
				<a onClick={this.handleClick.call(this, routes.TREASURY)} href="#">Treasury</a>
				<a onClick={this.handleClick.call(this, routes.WONDER)} href="#">Wonder</a>
				<a onClick={this.handleClick.call(this, routes.CIVILIAN)} href="#">Civilian</a>
				<a onClick={this.handleClick.call(this, routes.COMMERCIAL)} href="#">Commercial</a>
				<a onClick={this.handleClick.call(this, routes.GUILD)} href="#">Guild</a>
				<a onClick={this.handleClick.call(this, routes.SCIENCE)} href="#">Science</a>
			</div>;
		};
		return null;
	}
});

module.exports = Header;