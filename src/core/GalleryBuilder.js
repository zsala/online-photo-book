const fs = require('fs');

/**
 * Description:
 *  The object generates the different gallery html files for a given photo album.
 */
export const GalleryBuilder = class {
    /**
     * @param {object} assetTree asset data collected for static website generation
     * @param {int} galleryDataIndex number of the current album data consisting of all data realted to the galleries to be generated
     * @param {int} currentGalleryIndex
     * @param {int} imageStartIndex the index of the first image from a given page from the gallery data of an image album
     * @param {int} imageEndIndex the index of the last image from a given page from the gallery data of an image album
     * @param {int} maxGalleryNr the maximum number of galleries generated for a given image album
     */
    constructor(assetTree, galleryDataIndex, currentGalleryIndex, imageStartIndex, imageEndIndex, maxGalleryNr) {

        // public variables
        this.assetTree = assetTree;
        this.galleryDataIndex = galleryDataIndex;
        this.currentGalleryIndex = currentGalleryIndex;
        this.maxGalleryNr = maxGalleryNr;

        // private variables
        this.tiles = '';
        this.values = this.assetTree.getData();
        this.name = this.values[galleryDataIndex].name;

        for (let i=imageStartIndex; (i<imageEndIndex); i++) {
            this.withTile(this.values[this.galleryDataIndex].files.small[i])
        }

        this.withPagination();
    }

    /**
     * Generate all pagination entries for a given gallery page of an image album.
     */
    withPagination() {
        let entries = '';
        for (let i=1; i<=this.maxGalleryNr; i++) {
            entries += ((this.currentGalleryIndex + 1) === i) ?
                `<a class="active" href="${i}.html">${i}</a>` :
                `<a href="${i}.html">${i}</a>`;
        }

        this.pagination = `
            <div class="pagination column-6" data-index="${this.currentGalleryIndex+1}" data-min="1" data-max="${this.maxGalleryNr}">
                <a class="pagination__prev" onclick='application.pagination.previous()' href="#">&laquo;</a>
                ${entries}
                <a class="pagination__next" onclick='application.pagination.next()' href="#">&raquo;</a>
            </div>
        `;
    }

    /**
     * Adds a new image entry for the current gallery page.
     * @param {String} fileName the name of the image file shown in the gallery
     */
    withTile(fileName) {
        const regexSmall = new RegExp('small', '');
        const result = regexSmall.exec(fileName);

        this.tiles += `
            <div class="tile">
                <img class="tile__image tile__image--blur" src="../../img/root/${this.name}/${fileName}" alt="">
            </div>
        `;
    }

    generateHtml() {
        return `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="../../css/main.css"/>
                    <link rel="stylesheet" href="../../css/modal.css"/>
                    <link rel="stylesheet" href="../../css/breadcrumb.css"/>
                    <link rel="stylesheet" href="../../css/pagination.css"/>
                    <link rel="stylesheet" href="../../css/footer.css"/>
                    <link rel="stylesheet" href="../../css/color-themes/sky.css"/>
                    <title>${this.name} Album</title>
                </head>
                <body>
                    <ul class="breadcrumb">
                        <li><a href="../../index.html">Home</a></li>
                        <li>${this.name} Album</li>
                    </ul>

                    <!-- Photo Grid -->
                    <div class="container">
                        ${this.tiles}
                        ${this.pagination}

                        <div class="column-6">
                        </div>
                    </div>

                    <!-- The Modal -->
                    <div id="myModal" class="modal">

                        <!-- The Close Button -->
                        <span class="close">&times;</span>

                        <!-- Modal Content (The Image) -->
                        <img class="modal-content" id="img01" alt="" src="">

                        <!-- Modal Caption (Image Text) -->
                        <div id="caption"></div>
                    </div>
                    <div class="container">
                        <div class="column-6">
                        <div class="footer">
                            <p>Copyright 2021 by <a href="https://www.zsurzsalaszlo.com/">Laszlo-Andras Zsurzsa</a>. All Rights Reserved.</p>
                        </div>
                        </div>
                    </div>
                </body>
                <script src="../../js/core.js"></script>
                <script src="../../js/settings.js"></script>
                <script src="../../js/utilities.js"></script>
                <script src="../../js/pagination.js"></script>
                <script src="../../js/modal.js"></script>
                <script src="../../js/main.js"></script>
            </html>
        `;
    }

    /**
     * Function returns the absolute path of a gallery page generated for a given batch of images.
     */
    getPath() {
        return __dirname + `/../dist/albums/${this.name}/${this.currentGalleryIndex+1}.html`
    }

    build() {
        const htmlContent = this.generateHtml();
        fs.writeFile(this.getPath(), htmlContent, function (err) {
            if (err) console  (err)
        })
    }
};
