/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var React = require('react');

var keymirror = require('keymirror');
var routes = keymirror({
	'MAIN':null,
	'NEW_USER':null,
	'MILITARY':null,
	'TREASURY':null,
	'WONDER':null,
	'CIVILIAN':null,
	'COMMERCIAL':null,
	'GUILD':null,
	'SCIENCE':null
});

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
Pages[routes.MAIN] = React.createClass({
	handleClickNewUser: function(e) {
		this.props.onChangeRoute(routes.NEW_USER);
	},

	render: function() {
		return <a href="#" onClick={this.handleClickNewUser}>Create new user</a>;
	}
});

Pages[routes.NEW_USER] = require('./User.react.js');
// Pages[routes.MILITARY] = require('./Military.react.js');
// Pages[routes.TREASURY] = require('./Treasury.react.js');
// Pages[routes.WONDER] = require('./Wonder.react.js');
// Pages[routes.CIVILIAN] = require('./Civilian.react.js');
// Pages[routes.COMMERCIAL] = require('./Commercial.react.js');
// Pages[routes.GUILD] = require('./Guild.react.js');
// Pages[routes.SCIENCE] = require('./Science.react.js');

var ChatApp = React.createClass({
  render: function() {
  	var Content = Pages[this.props.route];
    return (<div><Content {...this.props}/></div>);
  }

});

module.exports = routable(ChatApp);
