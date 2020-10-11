const fs = require('fs');
const sizeOf = require('image-size');
const path = require('path');

const VALID_EXT = ['.png', '.jpg', '.jpeg', '.img'];
var IMAGES = new Array();
const PATH = `${__dirname}/assets`;
fs.readdir(PATH, (err, files) => {
  if (err) { console.log(err); }
  files.map((file) => {
    let fp = `${PATH}/${file}`;
    if (VALID_EXT.includes(path.extname(fp))) {
      let dim = sizeOf(fp);
      IMAGES.push({
        src: file,
        thumbnail: file,
        caption: file,
        thumbnailWidth: dim.width,
        thumbnailHeight: dim.height,
      });
    }
  });
  fs.writeFileSync(`${__dirname}/assets/images.json`, JSON.stringify(IMAGES));
});
