/**
 * Иерархия продуктов
 * Все продукты имеют одинаковый интерфейс,
 * чтобы создатели могли с ними работать
 */

class Pizza {}

class NYPizza extends Pizza {
  constructor() {
    super();
    this.type = 'NYPizza';
  }
}

class ChicagoPizza extends Pizza {
  constructor() {
    super();
    this.type = 'ChicagoPizza';
  }
}

export { NYPizza, ChicagoPizza };
