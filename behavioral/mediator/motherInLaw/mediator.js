/*
interface Mediator {
    send()
}
*/

class MotherInLaw {
  setMammy(mammy) {
      this.mammy = mammy;
  }
  setDaddy(daddy) {
      this.daddy = daddy;
  }
  setFridge(fridge) {
      this.fridge = fridge;
  }
  send(message, sender) {
      if (
          message == 'I wanna beer' &&
          sender.name == 'Daddy'
      ) {
          if (this.fridge.getBeer()) {
              this.daddy.notify('bottle of beer');
              this.mammy.notify('Daddy is drinking again')
          } else {
              this.daddy.notify('no beer');
          }
      } else if (
          message == 'the scandal begins' &&
          sender.name == 'Mammy'
      ) {
          this.daddy.notify('Mammy swears at you');
      }
  }
}

export { MotherInLaw };