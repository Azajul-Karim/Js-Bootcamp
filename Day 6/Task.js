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

function printDay(days) {
  const daysOfWeek = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const index = daysOfWeek.length;
  return index == days;
}
console.log(printDay("Saturday"));
