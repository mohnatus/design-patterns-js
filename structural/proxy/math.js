class RealMath {
    add(a, b) { return a + b; }
    sub(a, b) { return a - b; }
}

class MathProxy {
    constructor() {
        this.math = new RealMath();
    }

    add(a, b) { return this.math.add(a, b); }
    sub(a, b) { return this.math.sub(a, b); }
}

const math = new MathProxy();
console.log(math.add(3, 2)); // 5