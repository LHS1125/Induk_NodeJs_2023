var sayNode = function() {
  console.log('Node');
};
//var es = 'ES';
var es = 'KS';
const oldObject = {
  sayJS: function() {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
//console.log(oldObject.ES6); // Fantastic
console.log(oldObject.KS6); // Fantastic

