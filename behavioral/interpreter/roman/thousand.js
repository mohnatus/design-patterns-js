import Interpreter from "./interpreter";

class Thousand extends Interpreter {
  get one() {
    return 'M';
  }

  get four() {
    return '';
  }

  get five() {
    return '\0';
  }

  get nine() {
    return '';
  }

  get multiplier() {
    return 1000;
  }
}

export default Thousand;