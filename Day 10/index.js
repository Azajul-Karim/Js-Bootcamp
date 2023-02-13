//Loop
/*
 while (condition) {
     run sume code
 }
*/

// let count = 0;
// while (count < 7) {
//   console.log(`i love bangladesh ${count + 1} times`);
//   count++;
// }

// while (count < 7) {
//   const realCount = count + 1;
//   console.log(
//     `i love bangladesh ${realCount} ${realCount < 2 ? "time" : "times"} `
//   );
//   count++;
// }

// Infinity loop
// while (count < 10) {
//   console.log(count);
//   count--;
// }

// do while
// do {
//   console.log(count);
//   count++;
// } while (count < 10);

//for loop
/*
for(init; condition; step){
   run some code
}
*/
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//reverse loop
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

//break continue
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

//nested loop - for every step of the parent loop inner loop will complete
// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j);
//   }
// }

//looping with string
// let str = "hello";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//loop array and object
// let profile = ["topu", 23, "developer"];
// for (let i = 0; i < profile.length; i++) {
//   console.log(i);
//   console.log(profile[i]);
// }

// let profile1 = {
//   name: "topu",
//   age: 30,
//   profession: "developer",
// };

// for (const property in profile1) {
//   console.log(profile1[property]);
// }

// for of loop vs for in loop
// let profile = ["topu", 23, "developer"];
// for (const elm of profile) {
//   console.log(elm);
// }

//for of loop - array, string
//for of loop - object
//for in loop can be use with string and array but its not recommend as it does not ensure the order

// loop inside function
let names = ["topu", "sharif", "samim"];
function printNames() {
  for (const name of names) {
    console.log(name);
  }
}
printNames();
