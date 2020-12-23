export const GalleryBuilder = class {

    /**
     * 
     * @param {*} assetTree 
     * @param {*} index 
     * @param {*} currentGalleryIndex 
     * @param {*} imageStartIndex 
     * @param {*} imageEndIndex 
     * @param {*} maxGalleryNr 
     */
    constructor(assetTree, index, currentGalleryIndex, imageStartIndex, imageEndIndex, maxGalleryNr) {
        
        // public variables
        this.assetTree = assetTree;
        this.index = index; // index of the album
        this.currentGalleryIndex = currentGalleryIndex;
        this.maxGalleryNr = maxGalleryNr;
        
        // private variables
        this.tiles = '';
        this.values = this.assetTree.getValues();
        this.name = this.values[index].name;

        // TODO: only go till this.values[this.index].files.length!!!
        for (var i=imageStartIndex; i<imageEndIndex; i++) {
            this.withTile(this.values[this.index].files[i])
        }

        this.withPagination();
    }

    withPagination() {
        let entries = '';
        for (var i=1; i<=this.maxGalleryNr; i++) {
            entries += ((this.currentGalleryIndex + 1) == i) ? 
                `<a class="active" href="${i}.html">${i}</a>` : 
                `<a href="${i}.html">${i}</a>`;
        }

        this.pagination = `
            <div class="pagination column-4" data-index="${this.currentGalleryIndex+1}" data-min="1" data-max="${this.maxGalleryNr}">
                <a class="pagination__prev" onclick='application.pagination.previous()' href="#">&laquo;</a>
                ${entries}
                <a class="pagination__next" onclick='application.pagination.next()' href="#">&raquo;</a>
            </div>
        `;
    }

    withTile(fileName) {
        this.tiles += `
            <div class="tile">
                <img class="tile__image" src="../../img/root/${this.name}/${fileName}" alt="">
            </div>
        `;
    }

    build() {
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
                            <p>Copyright 2020 by <a href="https://www.zsurzsalaszlo.com/">Laszlo-Andras Zsurzsa</a>. All Rights Reserved.</p>
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
};