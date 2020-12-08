// Settings functionality
(function () {

	'use strict';

	// Create app settings
    let settings = {
        debug: true
    };

    /**
     * Update the settings object
     * @param  {String} key The setting key
     * @param  {*}      val The new value
     */
    let setting = function (key, val) {

        // if the setting doesn't exist, bail
        if (!(key in settings)) return;

        // Update the settings
        settings[key] = val;
    };

    /**
     * Get settings
     * @param  {String} key The setting key (optional)
     * @return {*}          The setting or object of settings
     */
    var getSettings = function (key) {

        // If there's a key, get a specific setting
        if (key) {
            return settings[key];
        }

        // Otherwise return the whole settings object
        return Object.assign({}, settings);
    };

    application.extend('getSettings', getSettings);
})();