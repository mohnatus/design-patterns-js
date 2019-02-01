/*
interface QuackBehavior {
  quack()
}
*/

class Quack {
  quack() { console.log('quack'); }
}

class Squeak {
  quack() { console.log('squeak'); }
}

class MuteQuack {
  quack() { console.log(''); }
}

export { Quack, Squeak, MuteQuack };