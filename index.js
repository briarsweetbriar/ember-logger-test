/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-logger-test',
  contentFor: function(type) {
    if (type === 'test-body-footer') {
      return "<script>" +
        "QUnit.assert.logs = function(type, expected, callback) { " +
          "var loggerMethod = Ember.Logger[type];" +
          "var _this = this;" +
          "Ember.Logger[type] = function(actual) { " +
            "_this.push(actual === expected, actual, expected, type + ' was logged');" +
          "};" +
          "callback();" +
          "Ember.Logger[type] = loggerMethod;};" +
        "</script>"
    }
  }
};

