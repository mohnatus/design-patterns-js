import Thousand from "./thousand";
import Hundred from "./hundred";
import Ten from "./ten";
import One from "./one";

let thousandInterpreter = new Thousand();
let hundredInterpreter = new Hundred();
let tenInterpreter = new Ten();
let oneInterpreter = new One();

export default (input) => {

  let result = oneInterpreter.interpret(
    tenInterpreter.interpret(
      hundredInterpreter.interpret(
        thousandInterpreter.interpret({ input: input, total: 0 })
      )
    )
  )
  
  // input was invalid
  if (result.input) return 0;

  return result.total;
}
