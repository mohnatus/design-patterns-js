class Interpreter {
  interpret({ input, total }) {
    let index = 0;
    if (this.nine && input.indexOf(this.nine) === 0) {
      total += 9 * this.multiplier;
      index +=2;
    } else if (this.four && input.indexOf(this.four) === 0) {
      total += 4 * this.multiplier;
      index += 2;
    } else {
      if (input[0] === this.five) {
        total += 5 * this.multiplier;
        index += 1;
      } else {
        index = 0;
      }

      for (let end = index + 3; index < end; index++) {
        if (input[index] === this.one) {
          total += 1 * this.multiplier;
        } else break;
      }
    }

    input = input.substring(index);

    return { input, total };
  }

  get one() {}

  get four() {}

  get five() {}

  get nine() {}

  get multiplier() {}
}

export default Interpreter;