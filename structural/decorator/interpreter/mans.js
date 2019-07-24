class Frenchman {
  bonjour() {
    return 'bonjour';
  }
}

class Interpreter {
  constructor(frenchman) {
    this.frenchman = frenchman;
    this.dictionary = {
      'bonjour': 'hello'
    }
  }

  hello() {
    return this.dictionary[this.frenchman.bonjour()];
  }
}

export { Frenchman, Interpreter };