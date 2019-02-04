/*
interface Component {
    name
    value
    add(Component)
    remove(Component)
    execute()
}
*/

class Leaf {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    execute() {
        return this.value;
    }
}

class Composite {
    constructor(name, value) {
        this.name = name;
        this.items = [];
        this.value = value || 0;
    }

    add(component) {
        this.items.push(component);
    }

    remove(componentName) {
        this.items = this.items.filter(item => {
            return item.name !== componentName;
        })
    }

    execute() {
        this.value = this.items.reduce((total, item) => {
            return total += item.execute();
        }, 0);
        return this.value;
    }
}

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

// Итого: 107800 руб.