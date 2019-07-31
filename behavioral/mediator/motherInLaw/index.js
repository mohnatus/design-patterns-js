import { Mammy, Daddy, Refrigerator } from "./colleagues";
import { MotherInLaw } from "./mediator";

let motherInLaw = new MotherInLaw();

let mammy = new Mammy(motherInLaw);
let daddy = new Daddy(motherInLaw);
let fridge = new Refrigerator(motherInLaw);

motherInLaw.setMammy(mammy);
motherInLaw.setDaddy(daddy);
motherInLaw.setFridge(fridge);

daddy.getBeer();

fridge.addBeer(2);
daddy.getBeer();
