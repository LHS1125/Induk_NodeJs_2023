const fs = require('fs');

fs.watch('./ch3/3.6/target.txt', (eventType, filename) => {
  console.log(eventType, filename);
});