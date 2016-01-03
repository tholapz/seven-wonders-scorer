var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = ChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _scores = {};

var ScoreStore = assign({}, EventEmitter, {
	
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getScores: function() {
		return _scores;
	}

});

var getInitialScore = function() {
	return {
		military: 0,
		treasury: 0,
		wonder: 0,
		civilian: 0,
		commercial: 0,
		guild: 0,
		science: 0
	};
};

ScoreStore.dispatchToken = ChatAppDispatcher.register(function(action) {
	switch (action.type) {
		case ActionTypes.NEW_USER:
			_scores[action.name] = assign({}, getInitialScore());
			break;
		default:
		// do nothing
	}
});

module.exports = ScoreStore;