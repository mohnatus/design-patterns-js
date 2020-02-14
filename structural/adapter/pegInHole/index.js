import { RoundHole } from './holes';
import { SquarePeg, SquarePegAdapter } from './pegs';


const hole = new RoundHole(5);

const smallPeg = new SquarePeg(5);
const largePeg = new SquarePeg(10);

hole.fits(smallPeg); // Несовместимые типы

const smallPegAdapter = new SquarePegAdapter(smallPeg);
hole.fits(smallPegAdapter); // Колышек помещается в отверстие!
const largePegAdapter = new SquarePegAdapter(largePeg);
hole.fits(largePegAdapter); // Колышек не помещается в отверстие!
