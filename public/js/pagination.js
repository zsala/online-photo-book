(function () {

	'use strict';

    const paginationContainer = document.getElementsByClassName("pagination")[0];
    const currentIndex = paginationContainer.getAttribute('data-index');
    const min = paginationContainer.getAttribute('data-min');
    const max = paginationContainer.getAttribute('data-max');
    const links = document.getElementsByTagName("a");
 
    /**
     * Pagination object:
     *  Contains logic related to moving between pages of the photo album.
     */
    const pagination = {
        previous() {
            const maxLinks = links.length;
            for(var i=0; i<maxLinks; i++) {
                if (links[i].innerHTML == currentIndex) {
                    if (currentIndex > min) {
                        application.log('Navigatin to: ' + links[i-1].href);
                        location.href = links[i-1].href;   
                    }
                }
            }
        },  
        
        next() {
            const maxLinks = links.length;
            for(var i=0; i<maxLinks; i++) {
                if (links[i].innerHTML == currentIndex) {
                    if (currentIndex < max) {
                        application.log('Navigatin to: ' + links[i+1].href);
                        location.href = links[i+1].href;
                    }
                }
            }
        }
    };

	application.extend('pagination', pagination);
})();