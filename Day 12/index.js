const profileObj = {
  fastName: "azajul",
  lastName: "karim",
  age: 30,
  profession: "Software Developer",
  // fullName: function () {
  //   return profileObj.fastName + " " + profileObj.lastName;
  // },
  fullName() {
    return this.fastName + " " + this.lastName;
  },
};
console.log(profileObj.fastName);
console.log(profileObj["fastName"]);
console.log(profileObj.fullName());
