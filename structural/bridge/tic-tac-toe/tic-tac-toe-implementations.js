/*
interface Implementation {
  draw() // отрисовать поле
  set() // поставить крестик/нолик
  finish() // отобразить победителя
}
*/

class TicTacToeCanvas {
  draw() { console.log('Поле нарисовано на холсте') }
  set() { /* Поставить крестик/нолик методами canvas */ }
  finish() { /* Отобразить победителя методами canvas */ }
}

class TicTacToe3D {
  draw() { console.log('Поле нарисовано в 3D') }
  set() { /* Поставить крестик/нолик в 3D */ }
  finish() { /* Отобразить победителя в 3D */ }
}

export { TicTacToeCanvas, TicTacToe3D };