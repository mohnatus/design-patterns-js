import { Frenchman, Interpreter } from "./mans";

let frenchman = new Frenchman();
try {
  frenchman.hello();
} catch(e) {
  console.log("Француз не говорит по-английски")
}

let foreigner = new Interpreter(new Frenchman());
try {
  console.log('Переводчик декорирует француза');
  console.log(foreigner.hello());
} catch(e) {
  console.log("Француз не говорит по-английски")
}