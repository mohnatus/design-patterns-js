/**
 * Паттерн прототип просто копирует исходный объект
 * Новые объекты создаются без использования конструктора
 */

class CopyMachine {
    constructor(sheet) {
        this.sheet = sheet;
    }

    copy() {
        let newSheet = Object.assign({}, this.sheet);
        return newSheet;
    }
}

export default CopyMachine;