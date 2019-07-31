import TrafficTower from "./traffic-tower";
import Airplane from "./airplane";

let trafficTower = new TrafficTower();

let airplane1 = new Airplane([55.45, 37.36], trafficTower);
let airplane2 = new Airplane([55.65, 36.18], trafficTower);
let airplane3 = new Airplane([53.23, 29.02], trafficTower);

console.log(airplane1.requestPositions());
