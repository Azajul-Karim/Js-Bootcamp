// function

// function printProfile() {
//   console.log("Hello I Am Topu");
//   console.log("I Am 23");
//   console.log("I Am Software Developer");
//   console.log("I Love Learning");
// }

// printProfile();

function multiply() {
  console.log(10 * 5);
}
multiply();

function area(length, width) {
  console.log(length * width);
}

area(9, 2);

function greet(person1, person2, person3) {
  console.log("Hi " + person1);
  console.log("Hi " + person2);
  console.log("Hi " + person3);
}
greet("Topu", "Anis", "Zaman");

//Deafult Pram Function
// function multiply02(num1, num2, num3 = 10) {
//   console.log(num1 * num2 * num3);
// }
// multiply02(2, 3, 4);
// multiply02(4, 5, 6);
// multiply02(7, 8);

//Return Keyword
function multiply02(num1, num2, num3 = 10) {
  return num1 * num2 * num3;
}
console.log(multiply02(2, 3, 4));
console.log(multiply02(4, 5, 6));
console.log(multiply02(7, 8));

function printProfile() {
  const str =
    "Hello I Am Topu " +
    "I Am 23 " +
    "I Am Software Developer " +
    "I Love Learning";
  return str;
}
const profile = printProfile();
console.log(profile + " hi there");

function printPersonProfile(name, age, profession, hobby) {
  const str = ` Hello I Am ${name} 
    I Am ${age} I Am ${profession} 
    I Love ${hobby}`;
  return str;
}
console.log(printPersonProfile("Topu", 23, "Software Developer ", "Learning"));
console.log(printPersonProfile("Nazim", 22, "Teacher ", "Teaching"));
