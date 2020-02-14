import { ChicagoPizzaOffice, NYPizzaOffice } from "./offices";

/**
 * Разные офисы - это Конкретные Создатели
 * реализующие Фабричный метод по-своему
 */

let nyOffice = new NYPizzaOffice();
let chicagoOffice = new ChicagoPizzaOffice();

/**
 * Чтобы получить пиццу в любом офисе
 * достаточно вызвать метод getProduct()
 */

let pizzaFromNYOffice = nyOffice.getProduct();
console.log('Пицца из нью-йоркского офиса:', pizzaFromNYOffice.type);

let pizzaFromChicagoOffice = chicagoOffice.getProduct();
console.log('Пицца из чикагского офиса:', pizzaFromChicagoOffice.type);
