import { ParticlesFactory } from './particles.js';

/* 
конкретные частицы
хранят только изменяющееся внешнее состояние
*/
class Particle {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw(context) {
    this.type.draw(context, this.x, this.y);
  }
}

class Game {
  constructor() {
    this.particles = [];
    this.factory = new ParticlesFactory();
  }

  addParticle(x, y, type, color) {
    let particleType = this.factory.getParticleType(type, color);
    let particle = new Particle(x, y, particleType);
    this.particles.push(particle);
  }

  draw(context) {
    this.particles.forEach(particle => {
      particle.draw(context);
    })
  }
}

export { Game };