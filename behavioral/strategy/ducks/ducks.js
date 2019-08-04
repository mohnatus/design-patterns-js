import { Quack, Squeak, MuteQuack } from './quackStrategies';

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

export { CommonDuck, RubberDuck };