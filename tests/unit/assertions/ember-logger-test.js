import Ember from 'ember';
import { module, test } from 'qunit';

module('Unit | Assertions | ember logger test');

const TestLogger = Ember.Object.extend({
  assert() {
    Ember.Logger.assert('assert message');
  },
  debug() {
    Ember.Logger.debug('debug message');
  },
  error() {
    Ember.Logger.error('error message');
  },
  info() {
    Ember.Logger.info('info message');
  },
  log() {
    Ember.Logger.log('log message');
  },
  warn() {
    Ember.Logger.warn('warn message');
  }
});

test('`assert.logs` captures Ember.Logger methods', function(assert) {
  const logger = TestLogger.create();
  const methods = ['assert', 'debug', 'error', 'info', 'log', 'warn'];

  assert.expect(methods.length);

  methods.forEach((method) => {
    assert.logs(method, `${method} message`, () => {
      logger[method]();
    });
  });
});
