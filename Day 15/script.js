//Destructuring
//Array Destructuring
const profile = ["topu", 23, true, "Developer"];

// const firstName = profile[0];
// const age = profile[1];
// const isLearner = profile[2];
// const profession = profile[3];

// console.log(firstName, age, isLearner, profession);

// const [firstName, age, isLearner, profession] = profile;

// console.log(firstName, age, isLearner, profession);

//Object Destructuring

const profileObj = {
  firstName: "Azajul",
  lastName: "Karim",
  email: "Topu@gmail.com",
  personTitle: "Mr.",
  fullName() {
    return this.personTitle + " " + this.firstName + " " + this.lastName;
  },
};

// console.log(profileObj.firstName);
// console.log(profileObj.fullName());

// const { firstName, lastName, profession, fullName } = profileObj;

// console.log(firstName, lastName, profession);
// console.log(fullName.call(profileObj));
