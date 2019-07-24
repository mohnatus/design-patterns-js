import { Driver } from "./driver";
import { CarProxy } from "./car";


let driver = new Driver(16);
let car = new CarProxy(driver);
console.log(car.drive());

let driver2 = new Driver(26);
let car2 = new CarProxy(driver2);
console.log(car2.drive());