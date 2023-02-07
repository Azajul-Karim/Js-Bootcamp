// Task 1
//When and why function is needed?
/*
1.Functions are needed in JavaScript because they allow you to encapsulate a specific piece of logic and reuse it multiple times throughout your code, which can improve code readability, reduce duplication, and make it easier to manage complex logic
2.Functions also allow you to break down your code into smaller, more manageable chunks, making it easier to debug and maintain
*/

// Task 2
// 2.write down and recap the difference between console and Return
/*
 console.log() is used to print information to the console for debugging purposes.

 return is used to specify the value that a function should output.
*/

// Task 3
function difference(num1, num2) {
  console.log(num1 - num2);
}
difference(10, 2);
difference(0, 2);

// Task 4
function myFunction(value) {
  return typeof value;
}
console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction(null));
console.log(myFunction("string"));
console.log(myFunction(["array"]));

// Task 5
// with array
function printDay(num) {
  const daysOfWeek = [
    undefined,
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  return daysOfWeek[num];
}
console.log(printDay(4));
console.log(printDay(7));
console.log(printDay(41));

// ****OR***
// with Object

function printDay(num) {
  const daysOfWeek = {
    1: "Saturday",
    2: "Sunday",
    3: "Monday",
    4: "Tuesday",
    5: "Wednesday",
    6: "Thursday",
    7: "Friday",
  };
  return daysOfWeek[num];
}
console.log(printDay(4));
console.log(printDay(7));
console.log(printDay(41));

// Task 6
function lastElement(arr) {
  return arr[arr.length - 1];
}
console.log(lastElement([1, 2, 3, 4]));
console.log(lastElement([1, 2, 3, 10]));
console.log(lastElement([1, 2, 3, "hi"]));
console.log(lastElement([]));

// Task 7

function createObj(arg1, arg2, arg3) {
  const order = {
    x: arg1,
    y: arg2,
    z: arg3,
  };
  return order;
}
console.log(createObj(1, 2, 3));
console.log(createObj("a", "b", "c"));
console.log(createObj("ab", "bc", "ca"));
