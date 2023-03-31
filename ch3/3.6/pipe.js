const fs = require('fs');

const readStream = fs.createReadStream('./ch3/3.6/readme4.txt');
const writeStream = fs.createWriteStream('./ch3/3.6/writeme3.txt');
readStream.pipe(writeStream);
