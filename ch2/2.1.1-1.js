if (true) {
  var x = 3;
}
console.log(x); // 3

if (true) {
  //const y = 3;
  let y = 3;
}

//const y=2; // if문 안의 const y와는 별개
y = 2; // 
console.log(y); // Uncaught ReferenceError: y is not defined
