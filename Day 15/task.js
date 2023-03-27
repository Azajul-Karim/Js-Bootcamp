// Exercise 1
function max(a, b) {
  return a > b ? a : b;
}

console.log(max(20, 25));
console.log(max(100, 25));

// Exercise 2
function arrayFromRange(num1, num2) {
  const lowerRange = num1 > num2 ? num2 : num1;
  const upperRange = num1 > num2 ? num1 : num2;
  let arr = [];
  for (let i = lowerRange; i <= upperRange; i++) {
    arr.push(i);
  }
  return arr;
}

const rangeOne = arrayFromRange(1, 10);
console.log(rangeOne);
const rangeTwo = arrayFromRange(10, 5);
console.log(rangeTwo);

// Exercise 3
function showNumber(num1, num2) {
  const lowerRange = num1 > num2 ? num2 : num1;
  const upperRange = num1 > num2 ? num1 : num2;
  let sum = 0;
  for (let i = lowerRange; i <= upperRange; i++) {
    sum += i;
  }
  return sum;
}

console.log(showNumber(2, 4));
console.log(showNumber(5, 2));

// Exercise 4
function getMax(arr) {
  let maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

const numbers = [1, 2, 3, 4];
const max2 = getMax(numbers);
console.log(max2);

// Exercise 5
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = Math.round(sum / arr.length);
  let grade = "";
  switch (true) {
    case average < 60:
      grade = "F";
      break;
    case average >= 60 && average <= 69:
      grade = "D";
      break;
    case average >= 70 && average <= 79:
      grade = "C";
      break;
    case average >= 80 && average <= 89:
      grade = "B";
      break;
    case average > 89:
      grade = "A";
      break;
    default:
      grade = "Invalid Input";
      break;
  }
  return grade;
}

console.log(calculateAverage([60, 70, 90, 50, 55]));
console.log(calculateAverage([83, 70, 90, 50, 55]));
