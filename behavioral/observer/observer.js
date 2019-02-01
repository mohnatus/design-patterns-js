/*
interface Observer {
  update()
}
*/

class MeteoStation {
  constructor() {
    this.observers = [];
    this.temperature = 0;
    this.pressure = 0;
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update({
        temperature: this.temperature,
        pressure: this.pressure
      })
    })
  }

  change(temperature, pressure) {
    this.temperature = temperature;
    this.pressure = pressure;
    this.notifyObservers();
  }
}

class TemperatureMonitor {
  update(data) {
    console.log(`current temperature is ${data.temperature}C`);
  }
}

class PressureMonitor {
  update(data) {
    console.log(`current pressure is ${data.pressure} mm Hg`);
  }
}

let station = new MeteoStation();
let tempMonitor = new TemperatureMonitor();
let pressMonitor = new PressureMonitor();

station.registerObserver(tempMonitor);
station.registerObserver(pressMonitor);

station.change(25, 760);
// current temperature is 25C
// current pressure is 760 mm Hg