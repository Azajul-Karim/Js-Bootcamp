// Task 1
const isLearning = true;
if (isLearning) {
  console.log("Keep Learning");
} else {
  console.log("I hope you are learning....");
}
//The code should console.log "Keep Learning".

// Task 2
/*
in the given code, the variable isLearning is assigned the value of true, which is a truthy value. In a boolean context, true will be evaluated as true, and false as false.

That's why you can write if (isLearning) instead of if (isLearning === true). The if statement will evaluate the truthiness of isLearning, and if it's truthy, the code inside the block will be executed.
*/

// Task 3
const age = 20;

//Switch Statement
switch (true) {
  case age < 10:
    console.log("Stay home under your mom supervision");
    break;
  case age >= 10 && age < 15:
    console.log("Try to gain knowledge from outside of home");
    break;
  case age >= 15 && age < 18:
    console.log("Prepare to cast vote");
    break;
  case age >= 18:
    console.log("Cast your vote");
    break;
  default:
    console.log("You are out of range");
}

//if Statement
if (age < 10) {
  console.log("Stay home under your mom supervision");
} else if (age >= 10 && age < 15) {
  console.log("Try to gain knowledge from outside of home");
} else if (age >= 15 && age < 18) {
  console.log("Prepare to cast vote");
} else if (age >= 18) {
  console.log("Cast your vote");
} else {
  console.log("You are out of range");
}

// Task 4
let var1;
const var2 = "";
const var3 = 1;
const secretMessage = "secret!";

if (var1) {
  console.log("first");
} else if (var1 || var2) {
  console.log("second");
} else if (var1 || var3) {
  console.log("third");
} else {
  console.log("fourth");
}
/*
The above code will console.log("Third")
*The value of var1 when it is initialized is undefined
*The value of var2 is a falsy value because an empty string is a falsy value in JavaScrip
*/

/*
Is the value of var1 a "truthy" value? Why?
ans: var1 is not truthy value.var1 is a falsy value because undefined is a falsy value in JavaScript.
*/

/*
Is the value of var2 a "truthy" value? Why?
ans:var2 is not truthy value.The value of var2 is a falsy value because an empty string is a falsy value in JavaScript
*/

/*
Is the value of var3 a "truthy" value? Why?
ans:The value of var3 is a truthy value because number is a truthy value in JavaScript.
*/

// Task 5
const age1 = 19;

let result = age1 < 18 ? "Too young" : "Old enough";

console.log(result);

// Task 6
/*
If else statement: Use an if else statement when you have a complex condition with multiple branches and you need to execute different blocks of code based on the evaluation of the condition. The syntax is easy to read and understand, and it provides a lot of flexibility in terms of what you can do with the code.

Ternary operator: Use a ternary operator when you have a simple condition with two branches and you need to return a value based on the evaluation of the condition. The syntax is concise and easy to read, but it can become difficult to understand if the condition is complex.

Switch statement: Use a switch statement when you have a simple or complex condition with multiple branches and you need to execute different blocks of code based on the evaluation of the condition. The syntax is easy to read and understand, but it can be less flexible than an if...else statement in terms of what you can do with the code.
*/
