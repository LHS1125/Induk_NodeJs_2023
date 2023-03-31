const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./ch3/3.6/readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./ch3/3.6/readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);
