const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const data1 = fs.readFileSync('./ch3/3.6/big.txt');
fs.writeFileSync('./ch3/3.6/big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);
// before : 22622208
// buffer : 1023578112