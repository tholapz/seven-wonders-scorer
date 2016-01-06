var React = require('react');
var $ = require('jquery');
$.slider = require('bootstrap-slider');

var Military = React.createClass({
	componentDidMount: function() {
		debugger;
		$('#ex1').slider({
			formatter: function(value) {
				return 'Current value: ' + value;
			}
		});
	},


	render: function() {
		return (<form>
			<input
				id="ex1"
				data-slider-id="ex1Slider"
				type="text"
				data-slider-min="0"
				data-slider-max="20"
				data-slider-step="1"
				data-slider-value="14"
			/>
		</form>);
	}
});

module.exports = Military;