const fs = require('fs');

/**
 * Description:
 *  The object generates the index.html file.
 */
export const IndexBuilder = class {
    constructor(assetTree) {
        this.albums = '';
        
        const values = assetTree.getData();
        const nrOfAlbums = values.length;
        for (var i=0; i<nrOfAlbums; i++) {
            this.withAlbum(values[i].name);
        }
    }

    /**
     * Generate an album entry on the main page.
     * @param {String} name the name of the generated album entry
     */
    withAlbum(name) {
        this.albums += `
            <li>
                <span>${name}</span>
                <img onClick="application.gallery.goToGallery('./albums/${name}/1.html')" src="./img/root/${name}/cover.jpg" />
            </li>
        `;

        return this;
    }

    /**
     * Generated html.
     */
    generateHtml() {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <link rel="stylesheet" href="css/card.css"/>
                <link rel="stylesheet" href="css/main.css"/>
                <link rel="stylesheet" href="css/modal.css"/>
                <link rel="stylesheet" href="css/breadcrumb.css"/>
                <link rel="stylesheet" href="css/footer.css"/>
                <link rel="stylesheet" href="css/pagination.css"/>
                <link rel="stylesheet" href="css/album.css"/>
                <link rel="stylesheet" href="css/color-themes/sky.css"/>
                <title>Online Photo Book</title>
            </head>
            <body>
                <header>
                    <h1>The greatest moments of my life</h1>
                    <hr>
                    <h2>My Photo Albums</h2>
                </header>
                
                <section class="content">
                <div class=container>
                    <ul>${this.albums}</ul>
                </div>
            
                <div class="container">
                    <div class="column-6">
                    <div class="footer">
                        <hr>
                        <p>Copyright 2020 by <a href="https://www.zsurzsalaszlo.com/">Laszlo-Andras Zsurzsa</a>. All Rights Reserved.</p>
                    </div>
                    </div>
                </div>
                </section>
            </body>
            <script src="js/core.js"></script>
            <script src="js/settings.js"></script>
            <script src="js/utilities.js"></script>
            <script src="js/gallery.js"></script>
            <script src="js/main.js"></script>
            </body>
            </html>
        `
    }

    /**
     * Path of the entry html file for the static website.
     */
    getPath() {
        return __dirname + '/../dist/index.html';
    }

    build() {
        let htmlContent = this.generateHtml();
        fs.writeFile(this.getPath(), htmlContent, function (err) {
            if (err) console.log(err)
        })
    }
};