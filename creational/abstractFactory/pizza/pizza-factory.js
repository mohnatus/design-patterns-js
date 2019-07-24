/* 
interface AbstractPizzaFactory {
  createMeat() 
  createSauce() 
  createCheeze() 
  createAddition() 
  createDough()
}
*/

import { 
  PepperoniMeat,
  ChickenMeat,
  MustardSauce,
  FirmSauce,
  MozarellaCheeze,
  VeganCheeze,
  MushroomsAddition,
  PineappleAddition
} from './products';

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

export {
  PepperoniPizzaFactory,
  MushroomsPizzaFactory
};
