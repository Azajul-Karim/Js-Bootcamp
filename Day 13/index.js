//math
const num = 10.3245;

console.log(Math.trunc(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.round(num));
console.log(Math.abs(num)); //return positive
console.log(Math.pow(3, 3));
console.log(Math.random());
console.log(Math.max(312, 123, 455));
console.log(Math.min(312, 123, 455));

const result = Math.ceil(Math.random() * 5);
const result1 = Math.floor(Math.random() * 5);
console.log(result);
console.log(result1);

function getRanNum(num1, num2) {
  return Math.random() * (num1 - num2) + num2;
}
console.log(getRanNum(2, 6));

// Date
const date = new Date();
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toISOString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

//setting date
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getMilliseconds());

date.setFullYear(2020);
console.log(date);

//digital clock

function getCurrentTime() {
  const date1 = new Date();
  let hours = date1.getHours();
  const minutes = date1.getMinutes();
  const seconds = date1.getSeconds();
  hours = hours > 12 ? hours - 12 : hours; //15 -3
  formattedHours = hours < 10 ? "0" + hours : hours; // 9-09
  formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
const timer = setInterval(() => {
  console.log(getCurrentTime());
}, 1000);
