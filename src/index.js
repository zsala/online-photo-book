import { AssetTree } from './AssetTree';
var fs = require('fs');

let assetTree = new AssetTree(10,10);
console.log(assetTree.getValues());

const directoryToScan = __dirname + '/../public/img/root';

fs.readdir(directoryToScan, (err, files) => {
    if (files) {
        files.forEach(file => {
            console.log(file);
        });
    }
});