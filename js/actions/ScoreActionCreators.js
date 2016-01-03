var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');

var ActionTypes = ChatConstants.ActionTypes;

module.exports = {
	addNewUser: function(name) {
		ChatAppDispatcher.dispatch({
			type: ActionTypes.NEW_USER,
			name: name
		});
	}
};