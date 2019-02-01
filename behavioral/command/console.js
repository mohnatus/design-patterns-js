import { Light, Garage } from './receivers.js';

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

class HouseConsole {
  submit(command) {
    command.execute();
  }
}

let light = new Light();
let garage = new Garage();

let lightOn = new LightOnCommand(light);
let lightOff = new LightOffCommand(light);
let garageOn = new GarageOnCommand(garage);
let garageOff = new GarageOffCommand(garage);

let houseConsole = new HouseConsole();


houseConsole.submit(lightOn);
// свет включился

houseConsole.submit(garageOn);
// дверь гаража поднялась
// дверь гаража остановилась
// свет в гараже включился
