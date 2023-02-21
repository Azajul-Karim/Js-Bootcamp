// Exercise -1
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(20, 25));
console.log(max(100, 25));

// Exercise -2
function arrayFromRange(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}
const rangeOne = arrayFromRange(1, 10);
console.log(rangeOne);
const rangeTwo = arrayFromRange(5, 10);
console.log(rangeTwo);

// Exercise -3
function showNumber(num1, num2) {
  let sum = 0;

  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  } else {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  }

  return sum;
}

console.log(showNumber(2, 4));
console.log(showNumber(5, 2));
