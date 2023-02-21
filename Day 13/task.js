// ---------Exercise-1-------------
// function myFunction(a, b) {
//   return a - b === 0;
// }
// console.log(
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
// );
// console.log(
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
// );
// console.log(
//   myFunction(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
// );

// ---------Exercise-2-------------
function myFunction(a, b) {
  return Math.abs((a.valueOf() - b.valueOf()) / (24 * 60 * 60 * 1000));
}
console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01")));
console.log(myFunction(new Date("2000-01-01"), new Date("2020-06-01")));

// ---------Exercise-3-------------
function myFunction(a, b) {
  return a < b ? true : false;
}
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
console.log(
  myFunction(new Date("2000/01/01 08:45:00"), new Date("2000/01/01 08:00:00"))
);
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);

// ---------Exercise-4-------------
function myFunction(a, b) {
  let hrs = Math.abs(a.getHours() - b.getHours());
  let min = Math.abs(a.getMinutes() - b.getMinutes());
  let sec = Math.abs(a.getSeconds() - b.getSeconds());
  return { hrs, min, sec };
}
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
);
console.log(
  myFunction(new Date("2000/01/01 09:50:23"), new Date("2000/01/01 08:00:00"))
);
console.log(
  myFunction(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"))
);

// ---------Exercise-5-------------
function generateRandomNum(startNum, endNum) {
  return Math.floor(Math.random() * Math.abs(startNum - endNum) + startNum);
}
console.log(generateRandomNum(5, 10));
