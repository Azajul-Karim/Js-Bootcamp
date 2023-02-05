//String
"hello world";
"hello world";

console.log(typeof "hello world");

// concat
"Azajul" + "Karim"; // Azajul Karim

//Eacape Char start With "\"
var escape1 = "Hello I 'Am Azajul";
console.log(escape1);

//String Lrngth
"Hello World".length; //11

//Access Individual Characters Using [] And An Index
"Hello World"[0]; //"h"
"Hello World"[4]; //"o"

//number
123;
3.334 - 2344;
2345;

console.log(typeof 123);
console.log(typeof 3.334);
console.log(typeof -2344);

//We Can Do Some Math
4 + 10; //14
10 - 6; //4
10 / 2; //5
3 * 5; //15
3 ** 3; //26

//Modulos - Remainder Operator
10 % 3; //1
24 % 2; //0

// Boolean

true;
false;

console.log(typeof true);
console.log(typeof false);

// Symbol
Symbol("rand1");
Symbol("rand2");

console.log(typeof Symbol("rand1"));
console.log(typeof Symbol("rand2"));

// Null Undefined

//Big Int
123n;
456n;

console.log(typeof 123n);

var firstName = "Topu";

console.log(firstName + " Ahmed");

let lastName = "Ahmed";

console.log(firstName + " " + lastName);

const profession = "Software Developer";
console.log(firstName + " " + lastName + " is a " + profession);

console.log(`${firstName} ${lastName} is a ${profession}`);

// null and undefined
let var1;
console.log(var1);
let var2 = null;
console.log(var2);
// ### Undefined ###
/*
1.Variables That Are Declared But Not Initialized Are undefined
2.The Following Variables Are Undefined
3.It is not an assignment value. It means a variable has been declared but has not yet been assigned a value.
4.It is a type itself.
5.The undefined value is a primitive value, which is used when a variable has not been assigned a value.
6.Undefined indicates the absence of the variable itself.
7.Undefined is converted to NaN while performing primitive operations.
*/
// ### Null ###

/*
1.Null Is Explicityly Nothing
2.It is an assignment value. It can be assigned to a variable which indicates that a variable does not point any object.
3.It is an object.
4.The null value is a primitive value which represents the null, empty, or non-existent reference.
5.Null indicates the absence of a value for a variable.
6.Null is converted to zero (0) while performing primitive operations.
*/
