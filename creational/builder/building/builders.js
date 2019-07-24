import { House } from './house.js';

class Builder {
  constructor() {
    this.house = new House();
  }

  buildHouse() {};
}

// Строитель домов на сваях
class StiltsBuilder extends Builder {
  constructor() {
    super();
  }

  buildHouse() {
    this.house.setStores(1);
    this.house.buildBase('сваи');
    this.house.buildFloor('деревянный пол');
    this.house.buildWalls('деревянные окна');
    this.house.buildRoof('треугольная крыша');

    return this.house;
  }
}

// Строитель офисных зданий
class OfficeBuilder extends Builder {
  constructor() {
    super();
  }

  buildHouse() {
    this.house.setStores(10);
    this.house.buildBase('ленточный фундамент');
    this.house.buildFloor('плиточный пол');
    this.house.buildWalls('панорамные окна');
    this.house.buildRoof('плоская крыша');

    return this.house;
  }
}

export { StiltsBuilder, OfficeBuilder };

