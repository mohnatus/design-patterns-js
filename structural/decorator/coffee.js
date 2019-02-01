/*
interface Coffee {
  getCost()
  getDescription()
}
*/

class Espresso {
  getCost() {
    return 30;
  }
  getDescription() {
    return 'Espresso';
  }
}

class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

class Caramel extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  getCost() {
    return this.coffee.getCost() + 5;
  }

  getDescription() {
    return this.coffee.getDescription() + ' with caramel';
  }
} 

class Vanilla extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  getCost() {
    return this.coffee.getCost() + 10;
  }

  getDescription() {
    return this.coffee.getDescription() + ' with vanilla';
  }
}

let coffee = new Espresso();
coffee.getCost(); // 30
coffee.getDescription(); // espresso

let tastyCoffee = new Vanilla(new Caramel(new Espresso ()));
tastyCoffee.getCost(); // 45
tastyCoffee.getDescription(); // espresso with caramel with vanilla


