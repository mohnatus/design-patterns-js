import Interpreter from "./interpreter";

class Ten extends Interpreter {
  get one() {
    return 'X';
  }

  get four() {
    return 'XL';
  }

  get five() {
    return 'L';
  }

  get nine() {
    return 'XC';
  }

  get multiplier() {
    return 10;
  }
}

export default Ten;