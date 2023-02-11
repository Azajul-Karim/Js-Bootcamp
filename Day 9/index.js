// conditionals
// const studyLevel = "hard";

// if (studyLevel === "hard") {
//   console.log("You Will Passed");
// } else {
//   console.log("You will Fail");
// }

const studyLevel = "average";

if (studyLevel === "hard") {
  console.log("You Will Passed");
} else if (studyLevel === "average") {
  console.log("You Will Make An Average Result");
} else {
  console.log("You will Fail");
}

const age = 18;
const canVote = age === 18;
console.log(canVote);

if (canVote) {
  console.log("you can vote");
} else {
  console.log("You can not vote");
}

// Switch

switch (studyLevel) {
  case "hard":
    console.log("You Will Passed");
    break;
  case "average":
    console.log("You Will Make An Average Result");
    break;
  default:
    console.log("You will Fail");
}

// Ternary
//condition ? "pass" : "Fail"

const result = studyLevel === "average" ? "You Will Passed" : "You will Fail";
console.log(result);

var myName = "topu";
if (myName === "topu") {
  console.log("you are allowed");
}
