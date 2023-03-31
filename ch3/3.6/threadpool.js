const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('1:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('5:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('6:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('7:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('8:', Date.now() - start);
});

// [Running] node "/Users/sopeuteuweeokeompyuteo/Desktop/LHS/Induk_NodeJs_2023/ch3/3.6/threadpool.js"
// 1: 1113
// 3: 1116
// 2: 1116
// 4: 1120
// 5: 2190
// 6: 2192
// 8: 2196
// 7: 2199

// [Done] exited with code=0 in 2.248 seconds

// [Running] node "/Users/sopeuteuweeokeompyuteo/Desktop/LHS/Induk_NodeJs_2023/ch3/3.6/threadpool.js"
// 2: 1089
// 3: 1092
// 4: 1093
// 1: 1099
// 5: 2196
// 7: 2197
// 6: 2198
// 8: 2199