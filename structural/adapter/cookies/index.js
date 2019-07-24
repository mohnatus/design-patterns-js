/**
 * Адаптер для человека, у которого сложности с печеньками
 */

class NoBiscuitesMan {
  buyCookies() {
    console.log('Я купил печеньки (cookies)!!!');
  }
}

class BiscuitsAdapter {
  constructor(man) {
    this.man = man;
  }

  buyBiscuits() {
    this.man.buyCookies();
  }
}

let john = new NoBiscuitesMan();

try {
  john.buyBiscuits();
} catch(e) {
  console.log('Джон не может купить печеньки (bisquits)');
}

// Добавим Джону адаптер
john = new BiscuitsAdapter(john);
john.buyBiscuits(); 