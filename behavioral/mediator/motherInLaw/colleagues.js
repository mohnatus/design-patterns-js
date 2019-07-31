/* 
interface Colleague {
    mediator
    send()
    notify()
}
*/

class Colleague {
  constructor(mediator) {
      this.mediator = mediator;
  }

  send(message) {
      this.mediator.send(message, this);
  }

  notify(message) {
      console.log(this.name + ' gets message: ' + message);
  }
}

class Mammy extends Colleague {
  constructor(mediator) {
      super(mediator);
      this.name = 'Mammy';
  }

  notify(message) {
      super.notify(message);
      if (message == 'Daddy is drinking again') {
          this.argue();
          this.mediator.send('the scandal begins', this);
      }
  }

  argue() {
      console.log(`${this.name}: You are f*king alconaut!`);
  }
}

class Daddy extends Colleague {
  constructor(mediator) {
      super(mediator);
      this.name = 'Daddy';
  }

  notify(message) {
      super.notify(message);
      if (message == 'bottle of beer') {
          this.rejoice();
      } else if (message == 'no beer') {
          this.anger();
      } else if (message == 'Mammy swears at you') {
          this.argue();
      }
  }

  getBeer() {
      console.log(`${this.name}: I wanna beer`);
      this.mediator.send('I wanna beer', this);
  }

  rejoice() {
      console.log(`${this.name}: Yeeah! My beer!`);
  }

  anger() {
      console.log(`${this.name}: Who the hell drank all my beer?`);
  }

  argue() {
      console.log(`${this.name}: I am a grown man!!!`)
  }
}

class Refrigerator extends Colleague {
  constructor(mediator) {
      super(mediator);
      this.name = 'fridge';
      this.bottles = 0;
  }

  addBeer(bottles) {
      this.bottles = bottles;
      console.log('Пополнение запасов пива в холодильнике');
  }

  getBeer() {
      if (this.bottles > 0) {
          this.bottles--;
          return true;
      }
      return false;
  }
}

export { Mammy, Daddy, Refrigerator };