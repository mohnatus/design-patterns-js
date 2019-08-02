/*
interface Observer {
  update()
}
*/

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

export { TemperatureMonitor, PressureMonitor };