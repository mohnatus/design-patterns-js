class Caretaker {
  constructor() {
    this.values = [];
  }

  addPattern(pattern) {
    this.values.push(pattern);
  }

  getPattern(index) {
    return this.values[index];
  }
}

export default Caretaker;