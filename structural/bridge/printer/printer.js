class Printer {
  constructor(ink) {
    this.ink = ink;
  }
}

class EpsonPrinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  print() {
    console.log('Printer: Epson, Ink: ' + this.ink.get());
  }
}

class HPPrinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  print() {
    console.log('Printer: HP, Ink: ' + this.ink.get());
  }
}

export { EpsonPrinter, HPPrinter };