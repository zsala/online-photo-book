import { GalleryBuilder } from './GalleryBuilder';
import { IndexBuilder } from './IndexBuilder';
const fs = require('fs');
const ncp = require('ncp').ncp; 

export const StaticHtmlBuilder = class {
    constructor(assetTree) {
        this.assetTree = assetTree;
        this.builders = {
            galleryBuilder: null,
            indexBuilder: new IndexBuilder(assetTree),
        };
    }

    setup() {
        console.log('--------------------------------');
        console.log('- Setup assets folders:        -');
        console.log('--------------------------------');

        const fromToFolders = [
            ['./public/css/','./dist/css/'],
            ['./public/img/','./dist/img/'],
            ['./public/js/','./dist/js/'],
        ];

        fromToFolders.forEach(fromTo => {
            const from = fromTo[0];
            const to = fromTo[1];
            
            ncp(from, to, (err) => { 
                if (err) return console.error(err); 
                console.log(`-> ${from} copied recursively ...`); 
            });
        });
    }

    /**
     * TODO: cleanup, this function only runs the builders, it does not handle file creation etc. logic.
     */
    build() {
        this.builders.indexBuilder.build();

        let dir = __dirname + `/../dist/albums`;
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        const values = this.assetTree.getData();
        const nrOfAlbums = values.length;
        for (var i=0; i<nrOfAlbums; i++) {
            let dir = __dirname + `/../dist/albums/${values[i].name}`;
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