// const profileObj = {
//   fastName: "azajul",
//   lastName: "karim",
//   age: 30,
//   profession: "Software Developer",
//   email: "topu@gmail.com",
//   // fullName: function () {
//   //   return profileObj.fastName + " " + profileObj.lastName;
//   // },
//   fullName() {
//     return this.fastName + " " + this.lastName;
//   },
// };
// console.log(profileObj.fastName);
// console.log(profileObj["fastName"]);
// console.log(profileObj.fullName());

//daynamic accessed properties
// const myVar = "email";
// console.log(profileObj[myVar]);

//-------- this ---------
//inside the function
//outside the function

// console.log(this); //window
// function greet(name) {
//   console.log(this);
//   return `hi${name}`;
// }
// //plain function call - window object
// greet("topu");
// with extra things(object reference) this will indicate the object justnleft of the .[]

// const profileObj = {
//   fastName: "azajul",
//   lastName: "karim",
//   age: 30,
//   email: "topu@gmail.com",
//   fullName() {
//     console.log(this);
//     return this.fastName + " " + this.lastName;
//   },
// };

// console.log(profileObj.fullName());

//new function() this indicates an epmty{}

//imlicit this binding
//explicit this binding(call, bind, apply)
//--------call-------
// function greet(name) {
//   console.log(this);
//   return `${this} ${name}`;
// }
//plain function call - window object
// console.log(greet("topu"));
// console.log(greet.call("hi", "topu"));

//--------apply-------
// function greet(name) {
//   console.log(this);
//   return `${this} ${name}`;
// }
// console.log(greet.apply("hi", ["topu"]));

//---------bind---------

// function greet(name) {
//   console.log(this);
//   return `${this} ${name}`;
// }
// console.log(greet.bind("hi", "topu"));

// const profileObj = {
//   fastName: "Azajul",
//   lastName: "Karim",
//   email: "topu@gmail.com",
//   personTitle: "Mr.",
//   fullName() {
//     console.log(this);
//     return function () {
//       return this.personTitle + " " + this.fastName + " " + this.lastName;
//     };
//   },
// };

// const inner = profileObj.fullName();
// console.log(inner.call(profileObj));

// const profileObj = {
//   fastName: "Azajul",
//   lastName: "Karim",
//   email: "Topu@gmail.com",
//   personTitle: "Mr.",
//   fullName() {
//     const that = this;
//     return function () {
//       return that.personTitle + " " + that.fastName + " " + that.lastName;
//     };
//   },
// };

// const inner = profileObj.fullName();
// console.log(inner());

//------Factory Function------
// function profile(fastName, lastName, email) {
//   return {
//     fastName: fastName,
//     lastName: lastName,
//     email: email,
//     fullName() {
//       return this.fastName + " " + this.lastName;
//     },
//   };
// }

// es6
// function profile(fastName, lastName, email) {
//   return {
//     fastName,
//     lastName,
//     email,
//     fullName() {
//       return this.fastName + " " + this.lastName;
//     },
//   };
// }

// console.log(profile("Azajul", "Karim", "Topu"));

//---------constructor----------

function Profile(fastName, lastName, email) {
  //  this{}
  (this.fastName = fastName),
    (this.lastName = lastName),
    (this.email = email),
    (this.fullName = function () {
      return this.fastName + " " + this.lastName;
    });
}

const topu = new Profile("Azajul", "Karim", "Topu@gmail.com");
console.log(topu.fullName());
