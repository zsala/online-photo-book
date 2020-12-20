import { AssetTree } from './AssetTree';
import { StaticHtmlBuilder } from './core/StaticHtmlBuilder';
const fs = require('fs');

/**
 * Static html generator code. The following logic right now generates only 
 * the album static html using hardcoded data in AssetTree class.
 */
let assetTree = new AssetTree();
let staticHtmlBuilder = new StaticHtmlBuilder(assetTree);
let htmlContent = staticHtmlBuilder.build();
fs.writeFile(__dirname + '/../dist/static/index.html', htmlContent, function (err) {
    if (err) console.log(err)
})

/**
 * Scan folder structure and log out files and directories.
 * Missing:
 *   - create static folders later, right now we are assuming it's there
 *   - move code to AssetTreeClass!
 */
const directoryToScan = __dirname + '/../public/img/root';
function scanDir(parent, directoryToScan) {
    fs.readdir(directoryToScan, (err, files) => {
        if (files) {
            files.forEach(file => {
                fs.lstat(directoryToScan + '/' + file, (err, stats) => {
                    if (err) return console.log(err);

                    // Note: used for debugging
                    // console.log(`------------------------------------`);
                    // console.log(`Name: ${file} `);
                    // console.log(`Parent: ${directoryToScan}`);
                    // console.log(`Is file: ${stats.isFile()}`);
                    // console.log(`Is directory: ${stats.isDirectory()}`);
                    // console.log(`------------------------------------`);

                    if (stats.isDirectory()) {
                        scanDir(directoryToScan, directoryToScan + '/' + file);
                    }
                });
            });
        }
    });
}
scanDir('root', directoryToScan);