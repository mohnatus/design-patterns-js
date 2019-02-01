class Light {
  on() {
    console.log('свет включился');
  }

  off() {
    console.log('свет выключился');
  }
}

class Garage {
  up() {
    console.log('дверь гаража поднялась');
  }

  down() {
    console.log('дверь гаража опустилась');
  }

  stop() {
    console.log('дверь гаража остановилась');
  }

  lightOn() {
    console.log('свет в гараже включился');
  }

  lightOff() {
    console.log('свет в гараже выключился');
  }
}

export { Light, Garage };