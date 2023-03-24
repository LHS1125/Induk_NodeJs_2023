const odd = "WW";
const even = "EEE";
module.exports = {
    odd,
    even
};
exports.AB = "AB"

console.log(this);
console.log(module.exports);
console.log(exports);
console.log(this === module.exports);
console.log(this === exports);

// function whatIsThis(){
//     console.log('function', this === exports, this === global);
// }
// whatIsThis();

( () =>  {
    console.log('function', this === exports, this === global);
})();


//
// {}
// true
// true
// function false true