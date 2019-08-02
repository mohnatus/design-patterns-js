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

export { MeteoStation };