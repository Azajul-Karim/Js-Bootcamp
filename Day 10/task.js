// task 1
// let num = 1;
// while (num <= 10) {
//   console.log(num);
//   num += 2;
// }
//The output of the code will be:(1,3,5,7,9)
/*
Explanation:
The code sets the variable num to 1, and then enters a while loop. The while loop continues as long as num is less than or equal to 10.

In each iteration of the loop, the current value of num is logged to the console using console.log(num), and then num is incremented by 2 using num += 2.

The loop continues until num is greater than 10, at which point the loop stops and the code execution is complete.
*/

// task 2
// let num = 1;
// while (num <= 20) {
//   if (num % 4 === 0) {
//     console.log(num);
//   }
//   num++;
// }
/*
The output of the code will be:(4,8,12,16,20)

Explanation:
The code sets the variable num to 1, and then enters a while loop. The while loop continues as long as num is less than or equal to 20.

In each iteration of the loop, a check is made to see if the current value of num is divisible by 4 using num % 4 === 0. If num is divisible by 4, the current value of num is logged to the console using console.log(num).

Regardless of whether num is divisible by 4 or not, num is incremented by 1 using num++.

The loop continues until num is greater than 20, at which point the loop stops and the code execution is complete.
*/

// Task 3
/*
  what will be the output and explain (2)
    let num = 100;
    while(num < 150) {
        console.log(num + 1);
        num--;
    }
*/

/*
 * output:
 * 101
 * 100
 * 99
 * ... ... ...
 * it will print the ouputs infinite time.
 * If you check it in your browser, it will crash at some point.
 * so, it is wise not check infinite loop in browser.
 

 explanation:
 Intial value of num is 100
 So when the loop starts
 it will check if 100 is less then 150 or not
 it will satisfy
 then it will print 101
 then it will proceed on the next line
 the value will decrease by 1 , so value will be 99
 then it will proceed to the next iteration
 it will check if 99 is less then 150 or not
 it will satisfy
 then it will print 100
 then it will proceed on the next line
 the value will decrease by 1 , so value will be 98
 then it will proceed to the next iteration
 in this way the loop will go on and o
 */

//  Task 4
exercise4.js;
/**
 * Print out all even numbers between 1 and 100. (2+2=4)
 * Write two solutions: One with a while loop and One with a for loop.
 */

/**
 * using for loop 
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) console.log(i);
    }
 * using while loop 
    let i = 1;
    while (i <= 100) {
        if (i % 2 == 0) console.log(i);
        i++;
    }
*/

// Task 5

/*
  Answer:
-------------------------------------
function repeat(num) {
  let string = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      string += "$";
    }
    string += "\n";
  }
  console.log(string);
}
repeat(3);
repeat(5);
*/

// Task 6
exercise6.js;
/**
 * Write a function (3)
 *
 * The function will print the numbers from 1 to 100.
 * But for multiples of three print “Fizz” instead of the number
 * and for the multiples of five print “Buzz”.
 * For numbers which are multiples of both three and five print “FizzBuzz”.
 *
 * function fizzBuzz(num){
 * //code
 * }
 *
 * fizzBuzz(100)
 * <!--
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 * ...
 * ... -->
 */

/**
 * Answer:
 * ------------------------------------- 
    function fizzBuzz(a, b) {
      for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
          console.log("FizzBuzz");
        } else if (i % 3 == 0) {
          console.log("Fizz");
        } else if (i % 5 == 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
      }
    }
 */

// Task 7

/**
 * Write a function that takes two strings (a and b) as arguments. (3)
 * Return the number of times 'a' occurs in 'b'
 *
 * function myFunction(a, b) {
 * return
 * }
 *
 * myFunction('m', 'how many times does the character occur in this sentence?') //2
 * myFunction('h', 'how many times does the character occur in this sentence?') //4
 * myFunction('?', 'how many times does the character occur in this sentence?') //1
 * myFunction('z', 'how many times does the character occur in this sentence?') //0
 */

/**
 * Answer:
 * ------------------------------------- 
    function myFunction(a, b) {
      let sum = 0;
      for (let i = 0; i < b.length; i++) {
        if (b[i] == a) sum++;
      }
      return sum;
    }
 */
