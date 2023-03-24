const { odd, even } = require('./var');

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

// module.exports = checkOddOrEven; // 외부에서 사용할 수 있도록

// 이러면 인덱스에서 require안해도 됨
module.exports = {
  odd,
  even,
  checkOddOrEven,
};
