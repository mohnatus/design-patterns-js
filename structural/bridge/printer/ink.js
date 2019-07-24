class Ink {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class AcrylicInk extends Ink {
  constructor() {
    super('acrylic-based');
  }
}

class AlcoholInk extends Ink {
  constructor() {
    super('alcohol-based');
  }
}

export { AcrylicInk, AlcoholInk };