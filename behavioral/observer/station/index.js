import { MeteoStation } from "./meteostation";
import { TemperatureMonitor, PressureMonitor } from "./observers";

let station = new MeteoStation();
let tempMonitor = new TemperatureMonitor();
let pressMonitor = new PressureMonitor();

station.registerObserver(tempMonitor);
station.registerObserver(pressMonitor);

station.change(25, 760);