import { Light } from './light.js';
import { Garage } from './garage.js';
import { 
  LightOnCommand, 
  LightOffCommand, 
  GarageOnCommand, 
  GarageOffCommand
} from './commands.js';
import { HouseConsole } from './console.js';

let light = new Light();
let garage = new Garage();

let lightOn = new LightOnCommand(light);
let lightOff = new LightOffCommand(light);
let garageOn = new GarageOnCommand(garage);
let garageOff = new GarageOffCommand(garage);

let houseConsole = new HouseConsole();

console.log('Команда lightOn');
houseConsole.submit(lightOn);

console.log('\nКоманда lightOff');
houseConsole.submit(lightOff);

console.log('\nКоманда garageOn');
houseConsole.submit(garageOn);

console.log('\nКоманда garageOff');
houseConsole.submit(garageOff);