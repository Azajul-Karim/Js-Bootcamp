/*
Arithmetic Operator
#Addition (+)
#Subtraction (-)
#Multiplication (*)
#Division (/)
#Raising To Power(**)
*/

// Assignment Operator (=)
let num1 = 20;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

let num4 = 6;
// num4 = num4 + 4;
num4 += 4; //Shortcurt
num4++; //Post Increment
++num4; //Pre Increment

// num4 = num4 - 4;
num4 -= 4; //Shortcurt
num4--; //Post Decrement
--num4; //Pre Decrement
console.log(num4);

let num3 = 3;
console.log(num3++); //Post Decrement
console.log(++num3); //Pre Decrement

let num5 = 5;
console.log(num3--); //Post Decrement
console.log(--num3); //Pre Decrement

/*
Comparison OPerator
let x = 6
Greater Than (>)
x > 10 - false

Greater Than Or Equal To (>=)
x >= 6 - true

Less Than (<)
x < 50 - false

Less Than Or Equal To (<=)
x <= 100 - true

Equal To (==)
x == "6" - true

Strict Equal To (===)
x === "6" - false

Not Equal To (!=)
x != "b" - true
*/

// == vs ===
// Loose Equal (Value)
//Strict Equal (Type + Value)

let x = 6;
console.log(x > 10);
console.log(x >= 6);
console.log(x < 50);
console.log(x <= 100);
console.log(x == "6");
console.log(x === "6");
console.log(x != "b");

// == vs ===
x == "6"; //Only Check Value (True)
x === "6"; //Not Only Check Value But Also Type(False) (True)

/*
x = 5 and y = 9
Logical Operator

Logical And Operator (&&)
x < 10 && x !== 5 -false

Logical Or Operator (||)
y > 9 || x === 5 - true

Logical Not Operator (!)
!(x === y) - true
*/

let a = 5;
let b = 9;

//Logical AND Return True When Every Part is True  otherwise False

console.log(a > 10 && b !== 5); //short circuit

//Logical AND Return True When Any Part is True  otherwise False
console.log(a < 10 || b !== 5); //short circuit

//Logical Not
console.log(!(a === b));

//Truthy And Falsy Value
/*
 Falsy Value
 1.False
 2.0
 3.""
 4.null
 5.undefined
 6.NaN
 */
//  Truthy Value
// console.log(Boolean("topu"));
// console.log(Boolean(0));
// console.log(Boolean(true === true));
// console.log(Boolean(true === 0));
// console.log(Boolean(true === null));
// console.log(Boolean(true === ""));
// console.log(Boolean(true === " "));
// console.log(Boolean(true === null));

// console.log(!!"topu");
// console.log(!!0);
// console.log(!!"");
// console.log(!!" ");
// console.log(!!null);
// console.log(!!undefined);

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || false);
console.log(true || true);
console.log(false && true);

let daynamicValue = true;

console.log(daynamicValue && "Hello");
console.log(daynamicValue || "Hello");

//Operator Precedence
console.log(2 + 3 * 10);
console.log((21 / 7) * 10);
console.log((2 + 3) * 10); //grouping Operator

// few interesting case
/*
true == "1";       //true
0 == false;        //true
null == undefined; //true
NaN == NaN;        //true
*/
console.log(null == null);
console.log(null == undefined);
console.log(null == 1);
console.log("hello" * 3);
console.log(typeof NaN);
