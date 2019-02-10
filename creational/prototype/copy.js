class CopyMachine {
    constructor(sheet) {
        this.sheet = sheet;
    }

    copy() {
        let newSheet = Object.assign({}, this.sheet);
        return newSheet;
    }
}

let importantDocument = {
    title: 'Hello, World',
    text: 'Lorem ipsum dolor sit amet'
};

let copyMachine = new CopyMachine(importantDocument);
let copy = copyMachine.copy();

// { title: "Hello, World", text: "Lorem ipsum dolor sit amet" }}