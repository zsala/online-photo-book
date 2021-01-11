import { GalleryBuilder } from './GalleryBuilder';
import { IndexBuilder } from './IndexBuilder';
const fs = require('fs');
const ncp = require('ncp').ncp; 

/**
 * Description:
 *  The object copies all static assets and generates the html files for the colledted
 *  image data.
 */
export const StaticHtmlBuilder = class {
    constructor(assetTree) {
        this.assetTree = assetTree;
    }

    /**
     * Move static assets to the distribution folder.
     */
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
      * Create destination folders for the static web pages for all data gathered through the asset tree.
      */
    build() {
        const indexBuilder = new IndexBuilder(this.assetTree);
        indexBuilder.build();
        
        let dir = __dirname + `/../dist/albums`;
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        const values = this.assetTree.getData();
        const nrOfAlbums = values.length;
        let galleryBuilder = null;
        for (var i=0; i<nrOfAlbums; i++) {
            let dir = __dirname + `/../dist/albums/${values[i].name}`;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);   
            }

            const nrOfImages = values[i].files.length;
            const nrOfGalleries = (nrOfImages) / 5;
            for (var j=0; j<nrOfGalleries; j++) {
                galleryBuilder = new GalleryBuilder(this.assetTree, i, j, j * 5, (j+1) * 5, nrOfGalleries),
                galleryBuilder.build();
            } 
        }
    }
};