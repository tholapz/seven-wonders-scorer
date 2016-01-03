var React = require('react');
var ScoreStore = require('../stores/ScoreStore.js');
var ChatConstants = require('../constants/ChatConstants');
var routes = ChatConstants.routes;
var calculateTotalScore = function(scoreObj) {
	return 0;
};
var Main = React.createClass({
	handleClickNewUser: function(e) {
		this.props.onChangeRoute(routes.NEW_USER);
	},

	handleClickUser: function(e) {

	},

	render: function() {
		var players = [];
		var scores = ScoreStore.getScores();
		for (var player in scores) {
			players.push(
				<li key={player}>
					<a
						href="#"
						onClick={this.handleClickUser(scores[player])}
					>
					{player + ':' + calculateTotalScore(scores[player])}
					</a>
				</li>
		 );
		}
		return (
			<div>
				<ul>{players}</ul>
				<a href="#" onClick={this.handleClickNewUser}>Create new user</a>;
			</div>
		);
	}
});

module.exports = Main;