const fs = require('fs');

export const AssetTree = class {
  constructor() {
    this.directoryToScan = __dirname + '/../public/img/root';
    this.directories = null;
  }

  scanDirectory(directoryToScan) {
    const files = fs.readdirSync(directoryToScan);
    if (files) {
      files.forEach(file => {
        const stats = fs.lstatSync(directoryToScan + '/' + file);
        if (stats.isDirectory()) {
          this.directories.push({
            name: file,
            caption: 'Test caption', // TODO: read it out from a file !?
            path: './img/root/',
            cover: 'cover.jpg',
            files: []
          });
        }
      });
    }
  }
  
  scanImages(directoryToScan, directory) {
      const files = fs.readdirSync(directoryToScan);
      if (files) {
          files.forEach(file => {
              const stats = fs.lstatSync(directoryToScan + '/' + file);
              if (stats.isFile()) {
                if (file !== 'cover.jpg') directory.files.push(file);
              }
          });
      }
  }

  getData() {
    if (this.directories) return this.directories;

    this.directories = [];
    this.scanDirectory(this.directoryToScan);
    for (let i=0; i<this.directories.length; i++) {
        this.scanImages(this.directoryToScan + '/' + this.directories[i].name, this.directories[i]);
    }
      
    return this.directories;
  }
};