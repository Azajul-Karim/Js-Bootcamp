// function greet(greetMsg, name) {
//   return `${greetMsg}, ${name}`;
// }
// console.log("Hi", "Topu");

// const arr = ["Topu", "Nazim", "Rahi"];

// function printNames(names) {
//   let outputNames = "";
//   for (const name of names) {
//     outputNames += name + " ";
//   }
//   return outputNames;
// }

// console.log(printNames(arr));

//first class function
// const a = 10;
// function prinNum(num) {
//   return num + 3;
// }
// console.log(prinNum(a));

// function calculate(num1, num2, action = "square") {
//   if (action === "sum") {
//     return num1 + num2;
//   } else if (action === "multiply") {
//     return num1 * num2;
//   } else {
//     return num1 ** num2;
//   }
// }
// console.log(calculate(2, 3, 'sum'));

// function calculate(num1, num2, action = square) {
//   return action(num1, num2);
// }

// function sum(num1, num2) {
//   return num1 + num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function square(num1, num2) {
//   return num1 ** num2;
// }
// console.log(calculate(2, 3, sum));
// console.log(calculate(2, 3, multiply));
// console.log(calculate(2, 3));

// function printNames(firstName) {
//   return function printLastName(lastName) {
//     return firstName + " " + lastName;
//   };
// }

// const innerFunc = printNames("Topu");
// console.log(innerFunc("Topu"));

// console.log(printNames("Azajul")("Karim"));

// function sum(num1) {
//   return function (num2) {
//     return num1 + num2;
//   };
// }
// console.log(sum(3)(2));

//evolution of function
// function square(num) {
//   return num * num;
// }
// console.log(square(3));

// let square = function (num) {
//   return num * num;
// };
// console.log(square(3));

//arrow function
let square = (num) => num * num;

console.log(square(3));
