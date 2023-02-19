// //Exercise-1: (3)
function myFunction(a, b) {
  return a.includes(b) ? b + a : a + b;
}
console.log(myFunction("cheese", "cake"));
console.log(myFunction("lips", "s"));
console.log(myFunction("Java", "script"));
console.log(myFunction(" think, therefore I am", "I"));

// //Exercise-2:(3)
function myFunction(a, b) {
  let result = [];
  let rest = a;
  while (rest.length) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(b);
}
console.log(myFunction("1234567", "."));
console.log(myFunction("abcde", "$"));
console.log(myFunction("zxyzxyzxyzxyzxyz", "w"));

//Exercise-3:(3)
function myFunction(a) {
  let b = [];
  for (i = 0; i < a.length; i++) {
    b[i] = String.fromCharCode(a.charCodeAt(i) + 1);
  }
  return b.join("");
}

console.log(myFunction("bnchmf"));
console.log(myFunction("bgddrd"));
console.log(myFunction("sdrshmf"));

//Exercise-4
function myFunction(a, n) {
  return a.slice(a.length - n);
}
console.log(myFunction([1, 2, 3, 4, 5], 2));
console.log(myFunction([1, 2, 3], 6));
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3));

//Exercise-5
function myFunction(a, b) {
  return a < b ? a / b : a * b;
}
console.log(myFunction(10, 100));
console.log(myFunction(90, 45));
console.log(myFunction(8, 20));
console.log(myFunction(2, 0.5));

// Exercise-6
let people = ["samim", "Anis", "Adnan", "Karim"];
//  * Answer-1:
for (let i of people) {
  console.log(i);
}

//  * Answer-2:
console.log(people.shift());

//  * Answer-3:
console.log(people.pop());

//  * Answer-4:
console.log(people.unshift("ifat"));

//  * Answer-5:
console.log(people.push("virat"));

//  * Answer-6:
for (let i of people) {
  if (i === "Anis") {
    console.log(i);
    break;
  }
}

//  * Answer-7:
console.log(people.slice(0, 1).concat(people.slice(2)));

//  * Answer-8:
console.log(people.indexOf("Anis"));

//  * Answer-9:

console.log(people.indexOf("Foo"));

//  * Answer-10:

console.log(people.splice(2, 1, "Elizabeth", "Bob"));

//  * Answer-11:

let withMiraz = people.concat("Miraz");
console.log(withMiraz);
