import Interpreter from "./interpreter";

class Hundred extends Interpreter {
  get one() {
    return 'C';
  }

  get four() {
    return 'CD';
  }

  get five() {
    return 'D';
  }

  get nine() {
    return 'CM';
  }

  get multiplier() {
    return 100;
  }
}

export default Hundred;