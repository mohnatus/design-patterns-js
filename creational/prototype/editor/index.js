import { Circle, Rectangle } from './shapes';

// создаем прототипы для последующего копирования
const rectanglePrototype = new Rectangle();
rectanglePrototype.width = 10;
rectanglePrototype.height = 20;

const circlePrototype = new Circle();
circlePrototype.radius = 20;

// создаем новые фигуры, клонируя прототипы
const newRectangle = rectanglePrototype.clone();
const newCircle = circlePrototype.clone();

// копии можно делать и с созданных фигур
// редактируем
newRectangle.width = 20;
newRectangle.height = 10;
// копируем
newRectangle.clone();
