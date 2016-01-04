var React = require('react');
var ChatConstants = require('../constants/ChatConstants');
var routes = ChatConstants.routes;

var Header = React.createClass({

	handleClick: function(targetRoute) {
		return function(e) {
			// TODO: change route
		}
	},
	render: function() {
		if (this.props.isVisible) {
			return <div>
				<a onClick={this.handleClick(routes.MILITARY)} href="#">Military</a>
				<a onClick={this.handleClick(routes.TREASURY)} href="#">Treasury</a>
				<a onClick={this.handleClick(routes.WONDER)} href="#">Wonder</a>
				<a onClick={this.handleClick(routes.CIVILIAN)} href="#">Civilian</a>
				<a onClick={this.handleClick(routes.COMMERCIAL)} href="#">Commercial</a>
				<a onClick={this.handleClick(routes.GUILD)} href="#">Guild</a>
				<a onClick={this.handleClick(routes.SCIENCE)} href="#">Science</a>
			</div>;
		};
		return null;
	}
});

module.exports = Header;