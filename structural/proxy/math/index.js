/**
 * Простой прокси, который переадресует запросы исходному объекту 
 */

class RealMath {
    add(a, b) { 
        console.log('Метод реального объекта');
        return a + b; 
    }
    sub(a, b) { 
        console.log('Метод реального объекта');
        return a - b; 
    }
}

class MathProxy {
    constructor() {
        this.math = new RealMath();
    }

    add(a, b) { 
        console.log('Обращение к прокси');
        return this.math.add(a, b); 
    }
    sub(a, b) { 
        console.log('Обращение к прокси');
        return this.math.sub(a, b); 
    }
}

const math = new MathProxy();
console.log(math.add(3, 2)); 