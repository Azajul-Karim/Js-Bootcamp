//Loop
/*
 while (condition) {
     run sume code
 }
*/

let count = 0;
while (count < 7) {
  console.log(`i love bangladesh ${count + 1} times`);
  count++;
}

while (count < 7) {
  const realCount = count + 1;
  console.log(
    `i love bangladesh ${realCount} ${realCount < 2 ? "time" : "times"} `
  );
  count++;
}

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
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//reverse loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

//break continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
