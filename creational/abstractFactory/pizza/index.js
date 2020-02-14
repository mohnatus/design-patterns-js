/**
 * Создание пиццы на Абстрактной фабрике
 */

import { MushroomsPizzaFactory, PepperoniPizzaFactory } from "./pizza-factory";

console.log('\nPepperoni Pizza\n');

let pepperoniFactory = new PepperoniPizzaFactory();
// в обратной последовательности, чтобы картинка получилась :)
pepperoniFactory.createSauce();
pepperoniFactory.createCheeze();
pepperoniFactory.createAddition();
pepperoniFactory.createMeat();
pepperoniFactory.createDough();


console.log('\nMushrooms Pizza\n');

let mushroomsFactory = new MushroomsPizzaFactory();

mushroomsFactory.createSauce();
mushroomsFactory.createCheeze();
mushroomsFactory.createAddition();
mushroomsFactory.createMeat();
mushroomsFactory.createDough();
