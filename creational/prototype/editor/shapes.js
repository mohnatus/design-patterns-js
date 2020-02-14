/**
 * Interface Shape {
 *    color,
 *    clone()
 * }
 */

class Rectangle {
  constructor(source) {
    if (source) {
      this.width = source.width;
      this.height = source.height;
    }
  }

  clone() {
    const shape = new Rectangle(this);
    console.log('Скопирован новый прямоугольник', shape);
    return shape;
  }
}

class Circle {
  constructor(source) {
    if (source) {
      this.radius = source.radius;
    }
  }

  clone() {
    const shape = new Circle(this);
    console.log('Скопирован новый круг', shape);
    return shape;
  }
}

export { Rectangle, Circle };
