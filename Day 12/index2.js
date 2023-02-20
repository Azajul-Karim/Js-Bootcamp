// copy by value copy by reference
const a = 10;
let b = a;
b = 20;
console.log(a, b);

const aObj = {
  name: "topu",
};

const bObj = aObj;
bObj.name;
console.log(aObj, bObj);

