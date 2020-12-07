// Utility functions
(function () {

	'use strict';

    const paginationContainer = document.getElementsByClassName("pagination")[0];
    let index = paginationContainer.getAttribute('data-index');
    const min = paginationContainer.getAttribute('data-min');
    const max = paginationContainer.getAttribute('data-max');
    const links = document.getElementsByTagName("a");

    var pagination = {
        previous() {
            for(var i=0, maxLinks=links.length; i<maxLinks; i++) {
                if (links[i].innerHTML == index) {
                    if (index > min) {
                        index--;
                        application.log('Navigatin to: ' + links[i-1].href);
                        location.href = links[i-1].href;   
                    }
                }
            }
        },  
        
        next() {
            for(var i=0, maxLinks=links.length; i<maxLinks; i++) {
                if (links[i].innerHTML == index) {
                    if (index < max) {
                        index++;
                        application.log('Navigatin to: ' + links[i+1].href);
                        location.href = links[i+1].href;
                    }
                }
            }
        }
    };

	application.extend('pagination', pagination);
})();