import Num from "./num";
import Sum from "./sum";
import Min from "./min";

let three = new Num(3);
let four = new Num(4);
let five = new Num(5);
let six = new Num(6);

let sum = new Sum(five, six);
console.log('SUM: ', sum.pattern());

let sum2 = new Sum(three, four);
console.log('SUM2: ', sum2.pattern());

let min = new Min(sum, sum2);
console.log('MIN: ', min.pattern());