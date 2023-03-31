const fs = require('fs');

const writeStream = fs.createWriteStream('./ch3/3.6/writeme2.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.\n');
writeStream.write('마지막.');
writeStream.end();
