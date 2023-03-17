function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
  return !x;
}
console.log(not1(0)); // true
console.log(not1('a')); // false
console.log(not1()); // true
const not2 = x => !x;
