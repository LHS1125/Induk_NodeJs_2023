const A = require('./globalA');

// global.message = '안녕하세요'; 
message = '안녕하세요'; // global은 최상위객체 = window 이므로 생략가능, console, require도 global 속성

console.log(A());
