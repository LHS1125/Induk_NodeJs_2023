function first() {
  console.log( '첫 번째');
  second();
}
function second() {
  console.log('두 번째');
  third();
}
function third() {
  console.log('세 번째');
}
first();
