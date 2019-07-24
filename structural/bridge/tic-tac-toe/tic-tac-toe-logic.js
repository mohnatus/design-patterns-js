class TicTacToe {
  constructor(implementation) {
    this.imp = implementation; 
  }
  start() {
    this.imp.draw();
  }
  // логика игры крестики-нолики
}

export { TicTacToe };