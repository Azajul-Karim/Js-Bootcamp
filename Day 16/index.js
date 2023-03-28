//Array Helper Method

const arr = [1, 2, 3, 4, 5];

//Map
// const result = arr.map(function (elm) {
//   return elm;
// });

// console.log(result);

//  Filter
// const result = arr.filter((elm) => elm % 2 === 0);

// console.log(result);

//Find
// const result = arr.find((elm) => elm % 2 === 0);

// console.log(result);

//findIndex
// const result = arr.findIndex((elm) => elm % 2 === 0);

// console.log(result);

// Every
// const result = arr.every((elm) => elm % 2 === 0);

// console.log(result);

//Some
// const result = arr.some((elm) => elm % 2 === 0);

// console.log(result);

// Reduce
// const result = arr.reduce((elm, curr) => {
//   console.log(elm, curr);
//   return elm + curr;
// }, 0);

// console.log(result);

const friends = [
  {
    name: "topu",
    books: ["bible", "harry potter"],
    age: 21,
  },
  {
    name: "nazim",
    books: ["war of pace", "harry potter two"],
    age: 22,
  },
  {
    name: "rahi",
    books: ["the lord of ring", "the shining"],
    age: 23,
  },
];

const allBooks = friends.reduce((acc, curr) => {
  return [...acc, curr.books];
}, []);

console.log(allBooks);

// countName
const names = ["Topu", "Nazim", "Rahi", "Topu", "Nazim"];

const countName = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name] = allNames[name] + 1;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countName);
