class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map(airplane => {
      return airplane.position;
    });
  }
}

export default TrafficTower;