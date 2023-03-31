const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const readStream = fs.createReadStream('./ch3/3.6/big.txt');
const writeStream = fs.createWriteStream('./ch3/3.6/big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
  console.log('stream: ', process.memoryUsage().rss);
});
// before : 22605824
// stream : 44347392