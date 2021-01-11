(function () {

	'use strict';

	/**
	 * Log a message to the console
	 * @param {String} msg The message to log
	 */
	var log = function (msg) {

		// If not in debug mode, do nothing
		if (!application.getSettings('debug')) return;

		// Log a message to the console
		console.log(msg);
    };

	application.extend('log', log);
})();