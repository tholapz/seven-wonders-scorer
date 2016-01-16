'use strict';

var ChatConstants = require('./constants/ChatConstants');
var routes = ChatConstants.routes;

var Pages = {};
Pages[routes.MAIN] = require('./components/Main.react.js');
Pages[routes.NEW_USER] = require('./components/User.react.js');
Pages[routes.MILITARY] = require('./components/Military.react.js');
Pages[routes.TREASURY] = require('./components/Treasury.react.js');
// Pages[routes.WONDER] = require('./components/Wonder.react.js');
// Pages[routes.CIVILIAN] = require('./components/Civilian.react.js');
// Pages[routes.COMMERCIAL] = require('./components/Commercial.react.js');
// Pages[routes.GUILD] = require('./components/Guild.react.js');
// Pages[routes.SCIENCE] = require('./components/Science.react.js');

module.exports = Pages;