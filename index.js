var EventEmitter = require('events').EventEmitter;

module.exports = {
	stub: function() {
		var args = Array.prototype.slice.call(arguments);

		var emitterRequested = typeof args[0] == 'boolean' && args.shift();

		var object = emitterRequested ? new EventEmitter() : {};

		if ('object' == typeof args[0]) {
			for (var method in args[0]) {
				var value = args[0][method];
				var spy = jasmine.createSpy();
				spy.andReturn(value);
				object[method] = spy;
			}
		} else {
			args.forEach(function(method) {
				object[method] = jasmine.createSpy();
			});
		}

		return object;
	}
};