const fs = require('fs');

/** 
 * Description:
 *  The main repsponsability of this object is to gather all relevant data needed for the
 *  static website generators. 
 */
export const AssetTree = class {
  constructor() {
    this.directoryToScan = __dirname + '/../public/img/root';
    this.directories = null;
  }

  /**
   * Scan a given root directory and save all sub directories in a given format
   * @param {String} directory absolute url of a root directory
   */
  scanDirectory(directory) {
    const files = fs.readdirSync(directory);
    if (files) {
      files.forEach(file => {
        const stats = fs.lstatSync(directory + '/' + file);
        if (stats.isDirectory()) {
          this.directories.push({
            name: file,
            path: './img/root/',
            cover: 'cover.jpg',
            files: []
          });
        }
      });
    }
  }
  
  /**
   * Scan a given image directory and save all image relevant data for later processes
   * @param {String} directory absolute url to an image directory
   * @param {Object} data directory data where file names are saved
   */
  scanImages(directory, data) {
      const files = fs.readdirSync(directory);
      if (files) {
          files.forEach(file => {
              const stats = fs.lstatSync(directory + '/' + file);
              if (stats.isFile()) {
                if (file !== 'cover.jpg') data.files.push(file);
              }
          });
      }
  }

  /**
   * Get all gethered data related to images.
   */
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