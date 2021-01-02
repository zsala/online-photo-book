(function () {

	'use strict';

    const Modal = {
        modal: null,
        modalImg: null,
        captionText: null,
        
        init() {
            this.modal = document.getElementById("myModal");
            this.modalImg = document.getElementById("img01");
            this.captionText = document.getElementById("caption");

            const imageElements = document.getElementsByClassName("tile__image");
            for (let i=0; i<imageElements.length; i++) {
                let currentImage = imageElements[i];
                currentImage.onclick = this.onModalOpen.bind(this, currentImage);
            }

            // Get the <span> element that closes the modal
            const span = document.getElementsByClassName("close")[0];
            if (span) {
                span.onclick = this.onModalClose.bind(this);
            }
        },

        /**
         * When the user clicks on an image in the gallery open the modal.
         * @param {*} self 
         */
        onModalOpen(self) {
            this.modal.style.display = "block";
            this.modalImg.src = self.src;
            this.captionText.innerHTML = self.alt;
        },

        /**
         * When the user clicks on <span> (x), close the modal.
         * @param {*} self 
         */
        onModalClose(self) {
            this.modal.style.display = "none";
        }
    }

    application.extend('modal', Modal);
})();