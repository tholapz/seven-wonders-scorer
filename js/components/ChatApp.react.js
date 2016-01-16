var React = require('react');

var Header = require('./Header.react.js');

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

var Pages = {};
Pages[routes.MAIN] = require('./Main.react.js');
Pages[routes.NEW_USER] = require('./User.react.js');
Pages[routes.MILITARY] = require('./Military.react.js');
Pages[routes.TREASURY] = require('./Treasury.react.js');
// Pages[routes.WONDER] = require('./Wonder.react.js');
// Pages[routes.CIVILIAN] = require('./Civilian.react.js');
// Pages[routes.COMMERCIAL] = require('./Commercial.react.js');
// Pages[routes.GUILD] = require('./Guild.react.js');
// Pages[routes.SCIENCE] = require('./Science.react.js');

var ScoreStore = require('../stores/ScoreStore');
var ChatApp = React.createClass({
	getInitialState: function() {
		return {
			currentPlayer: null
		}
	},

	handleChangePlayer: function(playerName) {
		this.setState({
			currentPlayer: ScoreStore.getPlayerByName(playerName)
		});
	},
  render: function() {
  	var Content = Pages[this.props.route];
    return (<div>
    	<Header
    		isVisible={this.props.route !== routes.MAIN && this.props.route !== routes.NEW_USER}
    		onChangeRoute={this.props.handleChangeRoute}
    		{...this.props}
    	/>
    	<Content
    		onChangePlayer={this.handleChangePlayer}
    		{...this.props}
    		{...this.state}
    	/>
    </div>);
  }

});

module.exports = routable(ChatApp);
