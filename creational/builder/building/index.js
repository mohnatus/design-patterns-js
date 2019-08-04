/**
 * Постройка зданий с паттерном Строитель
 */

import { Foreman } from './foreman';

console.log('\nОфисное здание\n');

let officeDirector = new Foreman('officeHouse');
let office = officeDirector.buildHouse();

console.log('\nДом на сваях\n');

let stiltsDirector = new Foreman('stiltsHouse');
let stiltsHouse = stiltsDirector.buildHouse();