import { Quack, Squeak, MuteQuack } from './quackStrategies.js';

class Duck {
  quack() {
    this.quackBehavior.quack();
  }
}

class CommonDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
  }
}

class RubberDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Squeak;
  }
}

let duck = new RubberDuck();
duck.quack(); // 'squeak'