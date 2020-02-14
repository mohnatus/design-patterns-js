/**
 * Круглый колышек
 * со свойством radius
 */
class RoundPeg {
  constructor(radius) {
    this._radius = radius;
  }

  getRadius() {
    return this._radius;
  }
}

/**
 * Квадратный колышек
 */
class SquarePeg {
  constructor(width) {
    this._width = width;
  }

  getWidth() {
    return this._width;
  }
}

/**
 * Адаптер
 */

class SquarePegAdapter extends RoundPeg {
  constructor(squarePeg) {
    super();
    this.peg = squarePeg;
  }

// Вычислить половину диагонали квадратного колышка по
// теореме Пифагора.
  getRadius() {
    return this.peg.getWidth() * Math.sqrt(2) / 2;
  }
}

export { RoundPeg, SquarePeg, SquarePegAdapter };
