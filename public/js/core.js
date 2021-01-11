let application = (function(){
    'use strict'

    // Public methods object
    let methods = {};

	/**
	 * Extend the public methods object
	 * @param  {String} name The new method name
	 * @param  {Function} fn The new method
	 */
	methods.extend = function (name, fn) {
		methods[name] = fn;
	};

	// Return public methods object
	return methods;
})();