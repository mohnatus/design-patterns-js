/* 
interface Meat {}
interface Sauce {}
interface Cheeze {}
interface Addition {}
*/

class PepperoniMeat {
  constructor() { console.log('--pepperoni--'); }
}
class ChickenMeat {
  constructor() { console.log('---chicken---'); }
}

class MustardSauce {
  constructor() { console.log('---mustard---'); }
}
class FirmSauce {
  constructor() { console.log('--firm sauce-'); }
}

class MozarellaCheeze {
  constructor() { console.log('--mozarella--'); }
}
class VeganCheeze {
  constructor() { console.log('-vegan cheeze'); }
}

class MushroomsAddition {
  constructor() { console.log('--mushrooms--'); }
}
class PineappleAddition {
  constructor() { console.log('--pineapple--'); }
}

export { 
  PepperoniMeat,
  ChickenMeat,
  MustardSaouce,
  FirmSauce,
  MozarellaCheeze,
  VeganCheeze,
  MushroomsAddition,
  PineappleAddition
}