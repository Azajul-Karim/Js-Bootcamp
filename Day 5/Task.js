// Task 1
/*
 the complex data type in JavaScript
  1. Array
  2. Object
*/

// Task 2
/*
#Array
 1.Basically, you need to use an    array, when you have a list of consequent data, and you are going to work with it as a collection
 2.It easily adds, iterates, gets count and checks for existence.
 3.Also, it stores order.

#Object 
 1.Use objects, when your items have keys (especially, non-integer) and you are going to work with them one by one.
 2.It is convenient to add, remove, check for existence properties. However, it is less convenient to iterate through object properties, and absolutely inproper to get its count.
 3.It is also impossible to store items' order.
*/

// task 3
const profile = {
  firstName: "Azajul",
  lastName: "Karim",
  occupation: "Software Developer",
};

// Add key and value
profile.Hobby = "Traveling";
//delete key and value occupation
delete profile.occupation;

console.log(profile);
console.log(profile["firstName"]);
console.log(profile["lastName"]);
console.log(profile["occupation"]);

// Task 4
/*
#Dot Notation
 Dot notation is the most common way to access elements in JavaScript. To use dot notation, you simply write the name of the object followed by a dot and the name of the property you want to access. For example, if we have an object called “person” with a property called “name”, we would access the name property using person.name.

#Bracket Notation
 Bracket notation is less common than dot notation, but it is useful in certain situations. To use bracket notation, you write the name of the object followed by brackets and the property you want to access. For example, if we have an object called “person” with a property called “name”, we would access the name property using person[“name”].
*/

// Task 5
//multiple ways to define an array
// An array is a special variable
const cars1 = ["Saab", "Volvo", "BMW"];
// A declaration can span multiple lines
const cars2 = ["Saab", "Volvo", "BMW"];
//also create an array, and then provide the elements
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

//multiple ways to define an object
//variables can also contain many values.
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
// An object definition can span multiple lines
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Task 6
// Access university name from the object
const userObj = {
  name: "samim",
  address: {
    city: "Dhaka",
    university: {
      name: "Dhaka University",
    },
  },
};
console.log(userObj.address.university.name);

// Access university name from the array
const userArr = ["samim", ["Dhaka", ["Dhaka university"]]];

console.log(userArr[1][1]);
