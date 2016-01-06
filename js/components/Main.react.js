var React = require('react');
var ScoreStore = require('../stores/ScoreStore.js');
var ChatConstants = require('../constants/ChatConstants');
var routes = ChatConstants.routes;
var calculateTotalScore = function(scoreObj) {
	return 0;
};
var Main = React.createClass({
	getInitialState: function() {
		return {
			scores: ScoreStore.getScores()
		}
	},

	componentDidMount: function() {
		ScoreStore.addChangeListener(this._change);
	},

	componentWillUnmount: function() {
		ScoreStore.removeChangeListener(this._change);
	},

	handleClickNewUser: function(e) {
		this.props.onChangeRoute(routes.NEW_USER);
	},

	handleClickUser: function(name) {
		return function(e) {
			this.props.onChangePlayer(name);
			this.props.onChangeRoute(routes.MILITARY);
		}.bind(this);
	},

	_change: function() {
		this.setState({
			scores: ScoreStore.getScores()
		});
	},

	render: function() {
		var players = [];
		for (var playerName in this.state.scores) {
			var player = this.state.scores[playerName];
			players.push(
				<tr key={playerName}>
					<td>
						<a
							href="#"
							onClick={this.handleClickUser(playerName)}
						>
							{playerName + ':' + calculateTotalScore(player)}
						</a>
					</td>
					<td>{player.military}</td>
					<td>{player.treasury}</td>
					<td>{player.wonder}</td>
					<td>{player.civilian}</td>
					<td>{player.commercial}</td>
					<td>{player.guild}</td>
					<td>{player.science}</td>
				</tr>
		 );
		}
		return (
			<div>
				<table>
				<tr>
					<th>Name:total</th>
					<th>Military</th>
					<th>Treasury</th>
					<th>Wonder</th>
					<th>Civilian</th>
					<th>Commercial</th>
					<th>Guild</th>
					<th>Science</th>
				</tr>
				{players}
				</table>
				<a href="#" onClick={this.handleClickNewUser}>Create new user</a>;
			</div>
		);
	}
});

module.exports = Main;