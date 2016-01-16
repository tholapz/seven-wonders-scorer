var React = require('react');

var Header = require('./Header.react.js');

var ChatConstants = require('../constants/ChatConstants');
var routes = ChatConstants.routes;
var routable = require('../decorators/RoutableComponent');

var ScoreStore = require('../stores/ScoreStore');
var ChatApp = React.createClass({
	Pages: require('../routes'),
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
  	var Content = this.Pages[this.props.route];
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
