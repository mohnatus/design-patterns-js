/*
interface Command {
  execute()
}
*/

class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

class LightOffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.off();
  }
}

class GarageOnCommand {
  constructor(garage) {
    this.garage = garage;
  }

  execute() {
    this.garage.up();
    this.garage.stop();
    this.garage.lightOn();
  }
}

class GarageOffCommand {
  constructor(garage) {
    this.garage = garage;
  }

  execute() {
    this.garage.lightOff();
    this.garage.down();
    this.garage.stop();
  }
}

export { LightOnCommand, LightOffCommand, GarageOnCommand, GarageOffCommand };