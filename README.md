A bunch of utility functions used in specs run with `jasmine-node`.

Contents:

`stub` - make a fake object having a methods of specified names. If first parameter is a boolean, the value is used to specify if the resulting object should be an `EventEmitter`.

Example usage:

```
var utils = require('wormly-specutils');

describe('testing utils', function() {
	it('stubs', function() {
		var fake = utils.stub(true, 'foo', 'bar');
		
		fake.foo(123);
		expect(fake.foo).toHaveBeenCalledWith(123);
	});

	it('event-emitter stubs', function() {
		var fake = utils.stub(true, 'foo', 'bar');

		var cb = jasmine.createSpy();
		
		fake.on('something', cb);
		fake.emit('something', 222);

		expect(cb).toHaveBeenCalledWith(222);
	});
			
	it('stubs with preset return values', function() {
		var fake = utils.stub({
			foo: 123
		});

		expect(fake.foo()).toEqual(123);
		expect(fake.foo).toHaveBeenCalledWith();
	});
});
```

