class Employee {
  constructor(salary) {
    this.bonus = 0;
    this.salary = salary;
  }

  accept(item) {
    item(this);
  }
}

class Manager extends Employee {
  constructor(salary) {
    super(salary);
  }
}

class Developer extends Employee {
  constructor(salary) {
    super(salary);
  }
}

export { Developer, Manager };
