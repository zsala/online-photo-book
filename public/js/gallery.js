(function () {

	'use strict';

    const gallery = {
        observerConfig: {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        },

        init() {
            application.log('Starting initialization ...');
            const imgs = document.getElementsByClassName('tile__image');
            
            let observer = new IntersectionObserver(this.imageIntersected, this.observerConfig);
        
            application.log(imgs)
            imgs.forEach( image => {
               observer.observe(image); 
            });
        },

        imageIntersected(entries) {
            application.log(entries)
        },

        /**
         * Callback function to go to a given gallery page
         * @param {String} path the relative path to a gallery page
         */
        goToGallery(path) {
            location.href = path;
        }
    }

    application.extend('gallery', gallery);
})();