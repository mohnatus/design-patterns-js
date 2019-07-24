/**
 * Постройка зданий с паттерном Строитель
 */

import { Director } from './director.js';

console.log('\nОфисное здание\n');

let officeDirector = new Director('officeHouse');
let office = officeDirector.buildHouse();

console.log('\nДом на сваях\n');

let stiltsDirector = new Director('stiltsHouse');
let stiltsHouse = stiltsDirector.buildHouse();