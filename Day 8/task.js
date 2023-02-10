// Task 1
/*
const x = 10;
const y = "a";
console.log(y === "b" || x >= 10);
Logical OR Return True When Every Part is True  otherwise False
*/
// Task 2
/*
const x = 3;
const y = 8;

console.log(!(x == "3" || x === y) && !(y != 8 && x <= y));
Logical AND Return True When Every Part is True  otherwise False
*/

// Task 3
/*
 Falsy Value
 1.False
 2.0
 3.""
 4.null
 5.undefined
 6.NaN

 Truthy Value
 1.true
 2."Hello" (any non-empty string)
 3.42 (any non-zero number)
 4.{} (empty object)
 5.[] (empty array)
 6.function(){} (any function)
 */
// truthy
console.log(Boolean("topu"));
console.log(Boolean(true));
console.log(Boolean(42));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function name(param) {}));

// Falsy
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Tssk 4
// const str = "haha!"
// const msg = ""
// const isFunny = "false"

// !(( str || msg ) || isFunny)

// Task 5
// == vs ===
x == "6"; //Only Check Value (True)
x === "6"; //Not Only Check Value But Also Check Type(False)

// Task 6
/*
Post Increment(a++)
In post-increment, the current value is returned first and then the increment operation takes place. So, if the variable a is equal to 5, then a++ will first return the value 5 and then increment a to 6.

Post Increment(++a)
In pre-increment, the increment operation takes place first, and then the new value is returned. So, if the variable a is equal to 5, then ++a will first increment a to 6 and then return the value 6.

*/
