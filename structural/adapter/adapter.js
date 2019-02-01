class NoBiscuitesMan {
  buyCookies() {
    console.log('Я купил печеньки!!!');
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

let john = new BiscuitsAdapter(new NoBiscuitesMan());
john.buyBiscuits(); // Я купил печеньки!!!