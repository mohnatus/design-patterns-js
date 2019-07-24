/**
 * Фабричный метод сети пиццерий
 */

import { NYPizza, ChicagoPizza } from './pizza.js';

class CentralPizzaOffice {
  /**
   * Фабричный метод родительского класса не определен
   */
  factoryMethod() {}

  getProduct() {
    return this.factoryMethod();
  }
}

class NYPizzaOffice extends CentralPizzaOffice {
  /**
   * Дочерние классы сами решают, что им производить
   */
  factoryMethod() {
    return new NYPizza();
  }
}

class ChicagoPizzaOffice extends CentralPizzaOffice {
  factoryMethod() {
    return new ChicagoPizza();
  }
}

export { NYPizzaOffice, ChicagoPizzaOffice };