import { Leaf, Composite } from "./kitchen-component";

let kitchen = new Composite('Кухня');

kitchen.add( new Leaf('Верхняя секция', 5200) );
kitchen.add( new Leaf('Верхняя двойная секция', 10000) );
kitchen.add( new Leaf('Нижняя секция', 4500) );
kitchen.add( new Leaf('Нижняя угловая секция', 7800) );

let equipment = new Composite('Техника');

equipment.add( new Leaf('Газовая плита', 26400) );
equipment.add( new Leaf('Холодильник', 32300) );
equipment.add( new Leaf('Посудомойка', 21600) );

kitchen.add(equipment);

console.log('Итого: ' + kitchen.execute() + ' руб.');