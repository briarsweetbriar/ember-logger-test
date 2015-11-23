# ember-logger-test

Test `Ember.Logger` assertions with ease.

## Installation

`ember install ember-logger-test`

## Usage

`ember-logger-test` adds a custom assertion to QUnit called `logs`:

```js
test('test my error handling', function(assert) {
  assert.expect(2);

  assert.logs('error', '`id` cannot be blank', () => {
    model.save();
  });

  assert.logs('warn', '`id` was set to `null`', () => {
    model.id = null;
    model.save();
  });
```

`logs` expects three arguments:

* The log type, including `assert`, `debug`, `error`, `info`, `log`, and `warn`.
* The expected message to be logged.
* A callback that triggers the logger.

Note: you must use `assert.expect` to ensure that the logs were run.
