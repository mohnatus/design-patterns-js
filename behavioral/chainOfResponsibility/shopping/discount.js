/**
 * Создание цепочки обязанностей 
 * Последовательный расчет скидки на продукты 
 */
class Discount {
  calc(products) {
    let ndiscount = new NumberDiscount();
    let pdiscount = new PriceDiscount();
    let none = new NoneDiscount();
    ndiscount.setNext(pdiscount);
    pdiscount.setNext(none);

    return 'Скидка: ' + ndiscount.exec(products);
  }
}

/**
 * Если больше трех продуктов, добавляется скидка
 */
class NumberDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  }

  exec(products) {
    let result = 0;
    if (products.length > 3) result = 0.05;

    return result + this.next.exec(products);
  }
}

/**
 * Если сумма покупки больше 500, добавляется скидка
 */
class PriceDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  }

  exec(products) {
    let result = 0;
    let total = products.reduce((a, b) => a + b);

    if (total >= 500) result = 0.1;

    return result + this.next.exec(products);
  }
}



class NoneDiscount {
  exec() {
    return 0;
  }
}

export default Discount;