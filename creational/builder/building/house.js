class House {
  constructor() {
    this.stores = 0;
  }

  setStores(count) {
    this.stores = count;
    console.log(`количество этажей: ${this.stores}`);
  }

  buildBase(base) {
    console.log(`построен фундамент: ${base}`);
  }

  buildFloor(floor) {
    console.log(`построен пол: ${floor} `);
  }

  buildWalls(windows) {
    console.log(`построены стены c окнами: ${windows}`);
  }

  buildRoof(roof) {
    console.log(`построена крыша: ${roof}`);
  }
}

export { House };