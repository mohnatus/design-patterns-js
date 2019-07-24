import CopyMachine from "./copy-machine";

let importantDocument = {
  title: 'Hello, World',
  text: 'Lorem ipsum dolor sit amet'
};

let copyMachine = new CopyMachine(importantDocument);
let copy = copyMachine.copy();

console.log("Копия важного документа:", copy);