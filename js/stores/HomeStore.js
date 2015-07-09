// Essentials
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

// App
var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

// Additions
var _ = require('underscore');

// Configuration


// STATES
var HomeMessage = 'Home';

// Dispatch functions

// State functions
var HomeStore = assign({}, EventEmitter.prototype, {
	getState: function() {
		return {
			HomeMessage: HomeMessage
		}
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

// Dispatcher
AppDispatcher.register(function(action) {
	switch(action.actionType) {
//		Example
//		case AppConstants.HANDLE_EMAIL:
//			handleEmail(action.data);
//			LoginStore.emitChange();
//			break;
		default:
	}
});

module.exports = HomeStore;