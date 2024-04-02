const sumAll = function(num1, num2) {
  let sum = 0;
  while (num1 <= num2) {
    sum += num1;
    num1++
  }
  return sum
};

sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
