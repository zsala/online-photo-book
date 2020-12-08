// Settings functionality
(function () {

	'use strict';

    /**
     * Go to a gallery page
     * @param  {String} path the relative path to a gallery page
     */
    var goToGallery = function (path) {
        location.href = path;
    }

    application.extend('goToGallery', goToGallery);
})();