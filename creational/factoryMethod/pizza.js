class Pizza {}

class NYPizza extends Pizza {
  constructor() {
    super();
    this.type = 'NYPizza';
  }
}

class ChicagoPizza extends Pizza {
  constructor() {
    super();
    this.type = 'ChicagoPizza';
  }
}

export { NYPizza, ChicagePizza };