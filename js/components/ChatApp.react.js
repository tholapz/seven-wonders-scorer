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

var User = require('./User.react.js');
var routes = keymirror({
	'MAIN':null
	'NEW_USER':null,
	'MILITARY':null,
	'TREASURY':null,
	'WONDER':null,
	'CIVILIAN':null,
	'COMMERCIAL':null,
	'GUILD':null,
	'SCIENCE':null
});

var ChatApp = React.createClass({

	getInitialState: function() {
		return {
			route: routes.MAIN
		}
	},

	changeRoute: function(route_name) {
		return function(e) {
			this.setState({route: route_name});	
		}.bind(this);
	},

  render: function() {
  	var content = routes[this.state.route];
    return (
      <div>
      	<a href="#" onClick={this.changeRoute('new_user')}>Create new user</a>
      </div>
    );
  }

});

module.exports = ChatApp;
