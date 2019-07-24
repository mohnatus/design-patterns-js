import { Espresso, Caramel, Vanilla } from "./decorators";

let coffee = new Espresso();
console.log('Кофе:', coffee.getDescription());
console.log('Цена:', coffee.getCost()); 
 

let tastyCoffee = new Vanilla(new Caramel(new Espresso ()));
console.log('Кофе:', tastyCoffee.getDescription());
console.log('Цена:', tastyCoffee.getCost()); 


