var React = require('react');
var Actions = require('../actions/ScoreActionCreators');
var User = React.createClass({

	getInitialState: function() {
		return {
			name: ''
		}
	},

	handleChangeName: function(e) {
		this.setState({
			name: e.currentTarget.value
		});
	},

	handleClickSubmit: function(e) {
		Actions.addNewUser(this.state.name);
	},

	render: function() {
		return (
			<form>
				<input type="text" onChange={this.handleChangeName} value={this.state.name}/>
				<input type="submit" onClick={this.handleClickSubmit}/>
			</form>
		);
	}
});

module.exports = User;