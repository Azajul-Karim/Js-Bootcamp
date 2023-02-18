//Javascript built in properties and methods
let str = "Hello There";

console.log(str.length);
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));
console.log(str.trim());
console.log(str.trimStart());
console.log(str.includes("Hello"));
console.log(str.startsWith("Hello"));
console.log(str.endsWith("There"));

//Slice And Substring
console.log(str.slice(0, 5));
console.log(str.slice(6, 9));
console.log(str.slice(2));
console.log(str.slice());
console.log(str.slice(-5, -3));
console.log(str.slice(-5, 11));
console.log(str.slice(-5, 2));
console.log(str.slice(6, 2));

//substring
console.log(str.substring(0, 5));
console.log(str.substring(6, 9));
console.log(str.substring(-6, 9));
console.log(str.substring(6, 2));

//split
console.log(str.split(" "));
console.log(str.split(""));
console.log(str.split("."));

//concat
console.log(str.concat(" I Am ", " Topu"));

//chartAt
console.log(str.charAt(0));
console.log(str.charAt(10));

// charCodeAt
console.log(str.charCodeAt(10));
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(6));

//search
console.log(str.search("H"));
console.log(str.search("l"));

//replace
console.log(str.replace("Hello", "Hi"));

//pad
console.log(str.padStart(15, "*"));
console.log(str.padEnd(20, "@"));

// Javascript Number Method
console.log(Number("10"));
console.log(Number("2234f4gg45"));

//parseInt
console.log(parseInt("2355hhn"));
console.log(parseInt("35345", 10));
console.log(parseInt(35345, 8));
console.log(parseInt(35345, 16));
console.log(parseInt(10, 2));

//parseFloat
console.log(parseFloat("25245.536"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//toFixed
let num = 343.45;
console.log(num.toFixed(1));

//understanding NaN
console.log(NaN === NaN);
console.log(1 === 1);

//isNaN
console.log(isNaN(10));
console.log(isNaN(-10));
console.log(isNaN("Topu"));
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN("2535NaN"));

//Number.isNaN return true if value in NaN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(10));
console.log(Number.isNaN("topu"));

const worldString = "Hello, world";

//adding removing data from array
const arr = [2, 3, 4, 5, 6];
//adding element from the end of the array
arr.push(5);
console.log(arr);
//remove element from the end of the array
arr.pop();
console.log(arr);
//adding element from the beginning of the array
arr.unshift(1);
console.log(arr);
//remove element from the beginning of the array
arr.shift(1);
console.log(arr);

//arr last index
console.log(arr[arr.length - 1]);

// slice(dosen't mutate the original array)
console.log(arr.slice(0, 2));
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(-5, -2));
console.log(arr);

//splice
// console.log(arr.splice(1, 3, "hello"));
// console.log(arr);

//Array Method
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8];
// concat
console.log(arr1.concat(8, 9, 10));
console.log(arr1.concat(arr2));
// join
console.log(arr1.join(","));
console.log(arr1);

// indexOf
console.log(arr1.indexOf(5));

// lastIndexOf
console.log(arr1.lastIndexOf(1));

//fill
console.log(new Array(10).fill("topu"));

//revers array
console.log(arr1.reverse());

//checking data type
console.log(Array.isArray(arr1));

//object method
const profile = {
  fName: "azajul",
  lName: "karim",
  age: 30,
  profession: "Software Developer",
};
console.log("fName" in profile);
console.log("lName" in profile);
