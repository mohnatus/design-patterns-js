/**
 * Круглое отверстие
 * может взамодействовать только с колышками
 * у которых есть свойство radius
 */

class RoundHole {
  constructor(radius) {
    this._radius = radius;
  }

  getRadius() {
    return this._radius;
  }

  fits(peg) {
    if (!peg.getRadius) {
      console.log('Несовместимые типы');
      return;
    }

    if (this.getRadius() >= peg.getRadius()) {
      console.log('Колышек помещается в отверстие!');
    } else {
      console.log('Колышек не помещается в отверстие!')
    }
  }
}

export { RoundHole };
