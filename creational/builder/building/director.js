/**
 * Директор управляет созданием нужного Строителя
 */

import { 
  StiltsBuilder, 
  OfficeBuilder 
} from './builders.js';

class Director {
  constructor(order) {
    if (order == 'stiltsHouse')
      this.builder = new StiltsBuilder();
    else if (order == 'officeHouse')
      this.builder = new OfficeBuilder();
    else 
      console.log('Мы строим только маленькие дома на сваях или офисные здания!!!');
  }

  buildHouse() {
    if (this.builder)
      return this.builder.buildHouse();
  }
}

export { Director };