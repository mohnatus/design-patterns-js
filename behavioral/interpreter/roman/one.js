import Interpreter from "./interpreter";

class One extends Interpreter {
  get one() {
    return 'I';
  }

  get four() {
    return 'IV';
  }

  get five() {
    return 'V';
  }

  get nine() {
    return 'IX';
  }

  get multiplier() {
    return 1;
  }
}

export default One;