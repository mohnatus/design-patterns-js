import { NYPizza, ChicagoPizza } from './pizza.js';

class CentralPizzaOffice {
  factoryMethod() {}
  getProduct() {
    return this.factoryMethod();
  }
}

class NYPizzaOffice extends CentralPizzaOffice {
  factoryMethod() {
    return new NYPizza();
  }
}

class ChicagePizzaOffice extends CentralPizzaOffice {
  factoryMethod() {
    return new ChicagoPizza();
  }
}

let nyOffice = new NYPizzaOffice();
nyOffice.getProduct(); // { type: 'NYPizza' }