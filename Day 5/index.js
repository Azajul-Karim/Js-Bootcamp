//Reference Data Type

// Array
const profile = ["Azajul", "Karim", 23, "Web Enginnear"];

//Adding Data
profile[3] = "Learner";
profile[4] = false;

//Update Data
profile[1] = "Ahmed";

//addding Daynamic Data
profile[4] = true;

console.log(profile);
console.log(profile[0]);
console.log(profile[0] + " " + profile[1]);
console.log(profile.length);

/*
#We can Initialize An Empty Array Two Ways
 const profile = [];
 const profile = new Array();

#Array Can Hold Any Type Of Data
 const random_collection = [49,true,"Topu",null]

#Array Have A Length Property
 const nums = [45,5,67,87,54]
 nums.length //4
*/
const complexArr = [1, "hello", true, null, ["nested", ["array"]]];

const lastIndex = complexArr.length - 1;
console.log(complexArr[lastIndex]);

//Object

const profileObj = {
  fName: "azajul",
  lName: "karim",
  age: 30,
  profession: "Software Developer",
};

// accessing Data
console.log(profileObj["fName"]);
console.log(profileObj.profession);
console.log(profileObj["age"]);

/*
#We can Initialize An Empty object Two Ways
 const profile = {};
 const profile = new Object();

#Object Can Hold Any Type Of Data
 const random_collection = {
   fName: "azajul",
   lName: "karim",
   age: 30,
   profession: "Software Developer",
   hobbies: ["Traveling", "Learning",],
 }
*/
