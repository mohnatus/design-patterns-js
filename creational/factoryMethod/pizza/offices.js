/**
 * Фабричный метод сети пиццерий
 */

import { ChicagoPizza, NYPizza } from './pizza.js';

/**
 * Абстрактный Создатель,
 * определяет пустой Фабричный Метод для дальнейшей реализации
 */
class CentralPizzaOffice {
  /**
   * Фабричный метод родительского класса не определен
   */
  factoryMethod() {}

  getProduct() {
    return this.factoryMethod();
  }
}

/**
 * Конкретные создатели сами решают, что им производить
 */
class NYPizzaOffice extends CentralPizzaOffice {
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
