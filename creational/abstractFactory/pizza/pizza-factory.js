import { FirmSauce, MozarellaCheeze, MustardSauce, PepperoniMeat, VeganCheeze } from './products';

/**
 * Абстрактная фабрика помнит, какие продукты нужно создать
 */

/*
interface AbstractPizzaFactory {
  createMeat()
  createSauce()
  createCheeze()
  createAddition()
  createDough()
}
*/

/**
 * Конкретные фабрики знают, как создавать каждый продукт
 */

class PepperoniPizzaFactory {
  createMeat() {
    return new PepperoniMeat();
  }
  createSauce() {
    return new FirmSauce();
  }
  createCheeze() {
    return new MozarellaCheeze();
  }
  createAddition() {
    return null;
  }
  createDough() {
    console.log('-------------');
  }
}

class MushroomsPizzaFactory {
  createMeat() {
    return null;
  }
  createSauce() {
    return new MustardSauce();
  }
  createCheeze() {
    return new VeganCheeze();
  }
  createAddition() {
    return null;
  }
  createDough() {
    console.log('-------------');
  }
}

export { PepperoniPizzaFactory, MushroomsPizzaFactory };
