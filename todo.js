const person = {
  firstName:"Shreya",
  lastName: "Dhakal",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

// This will return " Shreya Dhakal":  
person.fullName();  