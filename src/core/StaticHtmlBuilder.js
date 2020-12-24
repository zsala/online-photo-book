import { GalleryBuilder } from './GalleryBuilder';
import { IndexBuilder } from './IndexBuilder';
const fs = require('fs');

export const StaticHtmlBuilder = class {
    constructor(assetTree) {
        this.assetTree = assetTree;
        this.builders = {
            galleryBuilder: null,
            indexBuilder: new IndexBuilder(assetTree),
        };
    }

    /**
     * TODO: cleanup, this function only runs the builders, it does not handle file creation etc. logic.
     */
    build() {
        this.builders.indexBuilder.build();

        let dir = __dirname + `/../dist/static/albums`;
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        const values = this.assetTree.getData();
        const nrOfAlbums = values.length;
        for (var i=0; i<nrOfAlbums; i++) {
            let dir = __dirname + `/../dist/static/albums/${values[i].name}`;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }

            const nrOfImages = values[i].files.length;
            const nrOfGalleries = (nrOfImages) / 5;
            for (var j=0; j<nrOfGalleries; j++) {
                this.builders.galleryBuilder = new GalleryBuilder(this.assetTree, i, j, j * 5, (j+1) * 5, nrOfGalleries),
                this.builders.galleryBuilder.build();
            }
        }
    }
};