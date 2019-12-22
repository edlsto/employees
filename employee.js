class Employee {
  constructor(name) {
    this.name = name;
    this.personality = 'helpful';
    this.monthsOfEmployment = 0;
    this.onCall = this.name.length < 6 || false;
  }

  work() {
    this.monthsOfEmployment += 4;
    this.onboarding = this.monthsOfEmployment <= 6 || false;
  }
}

module.exports = Employee;
