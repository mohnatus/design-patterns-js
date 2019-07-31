import originator from "./originator";
import Caretaker from "./caretaker";

let caretaker = new Caretaker();

caretaker.addPattern(originator.store());
originator.restore(caretaker.getPattern(0));