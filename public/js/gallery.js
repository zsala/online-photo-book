(function () {

	'use strict';

    /**
     * Callback function to go to a given gallery page
     * @param  {String} path the relative path to a gallery page
     */
    var goToGallery = function (path) {
        location.href = path;
    }

    application.extend('goToGallery', goToGallery);
})();