import { Developer, Manager } from "./employees";

function bonusPattern(employee) {
  if (employee instanceof Manager) employee.bonus = employee.salary * 2;
  if (employee instanceof Developer) employee.bonus = employee.salary;
}

export default bonusPattern;