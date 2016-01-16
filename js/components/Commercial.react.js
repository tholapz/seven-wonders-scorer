var React = require('react');
var assign = require('object-assign');

var Commercial = React.createClass({

	getInitialState: function() {
		return {
			value: 0
		}
	},

	handleChangeFactory: function(stateName) {
		return function(e) {
			var newState = assign({}, this.state);
			newState[stateName] = e.currentTarget.value;
			this.setState(newState);
		}.bind(this);
	},

	render: function() {
		return (<form>
			<label>-1</label><input value={this.state.value} onChange={this.handleChangeFactory.call(this,'value')} type="number"/><br/>
		</form>);
	}
});

module.exports = Commercial;