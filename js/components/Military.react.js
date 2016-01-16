var React = require('react');
var assign = require('object-assign');

var Military = React.createClass({

	getInitialState: function() {
		return {
			minusOne: 0,
			plusOne: 0,
			plusThree: 0,
			plusFive: 0
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
			<label>-1</label><input value={this.state.minusOne} onChange={this.handleChangeFactory.call(this,'minusOne')} type="number"/><br/>
			<label>1</label><input value={this.state.plusOne} onChange={this.handleChangeFactory.call(this,'plusOne')} type="number"/><br/>
			<label>3</label><input value={this.state.plusThree} onChange={this.handleChangeFactory.call(this,'plusThree')} type="number"/><br/>
			<label>5</label><input value={this.state.plusFive} onChange={this.handleChangeFactory.call(this,'plusFive')} type="number"/><br/>
		</form>);
	}
});

module.exports = Military;