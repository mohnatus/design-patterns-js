import { Developer, Manager } from "./employees";
import bonusPattern from "./bonus";

let developer = new Developer(80000);
let manager = new Manager(80000);

bonusPattern(developer);
console.log('Бонус разработчика', developer.bonus);

bonusPattern(manager);
console.log('Бонус менеджера', manager.bonus);