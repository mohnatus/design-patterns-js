class ParticleType {
  /* 
  класс-легковес 
  хранит только неизменяющееся состояние
  и методы частиц
  */
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  draw(context, x, y) {
    /* 
    отрисовать частицу нужного типа и цвета 
    в нужных координатах
    в предоставленном контексте рисования 
    */
    console.log(`Частица типа ${this.type} цвета ${this.color} нарисована в координатах (${x}, ${y})`);
  }
}

class ParticlesFactory {
  constructor() {
    /* 
    коллекция уже созданных частиц
    которые можно использовать повторно
    */
    this.types = [];
  }

  getParticleType(type, color) {
    // найти похожую частицу в коллекции
    // реализация метода поиска может быть любой
    let particleType;
    for (let i = 0; i < this.types.length; i++) {
      if (this.types[i].type == type && this.types[i].color == color) {
        particleType = this.types[i];
        break;
      }
    }
    // если такой частицы нет, создать новую
    if (!particleType) {
      particleType = new ParticleType(type, color);
      this.types.push(particleType);
    } else {
      console.log(`Тип ${type} цвета ${color} уже существует`);
    }
    return particleType;
  }
}

export { ParticlesFactory };