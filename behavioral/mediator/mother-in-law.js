/* 
interface Colleague {
    mediator
    send()
    notify()
}
*/

class Colleague {
    constructor(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        this.mediator.send(message, this);
    }

    notify(message) {
        console.log(this.name + ' gets message: ' + message);
    }
}

class Mammy extends Colleague {
    constructor(mediator) {
        super(mediator);
        this.name = 'Mammy';
    }

    notify(message) {
        super.notify(message);
        if (message == 'Daddy is drinking again') {
            this.argue();
            this.mediator.send('the scandal begins', this);
        }
    }

    argue() {
        console.log(`${this.name}: You are f*king alconaut!`);
    }
}

class Daddy extends Colleague {
    constructor(mediator) {
        super(mediator);
        this.name = 'Daddy';
    }

    notify(message) {
        if (message == 'bottle of beer') {
            this.rejoice();
        } else if (message == 'no beer') {
            this.anger();
        }
    }

    getBeer() {
        this.mediator.send('I wanna beer', this);
    }

    rejoice() {
        console.log(`${this.name}: Yeeah! My beer!`);
    }

    anger() {
        console.log(`${this.name}: 'Who the hell drank all my beer?`);
    }

    argue() {
        console.log(`${this.name}: I am a grown man!!!`)
    }
}

class Refrigerator extends Colleague {
    constructor(mediator) {
        super(mediator);
        this.name = 'fridge';
        this.bottles = 0;
    }

    hasBeer() {
        return this.bottles > 0;
    }

    addBeer(bottles) {
        this.bottles = bottles;
    }

    getBeer() {
        if (this.bottles > 0) {
            this.bottles--;
            return 'bottle of beer';
        }
        return 'no beer';
    }
}

/*
interface Mediator {
    send()
}
*/

class MotherInLaw {
    setMammy(mammy) {
        this.mammy = mammy;
    }
    setDaddy(daddy) {
        this.daddy = daddy;
    }
    setFridge(fridge) {
        this.fridge = fridge;
    }
    send(message, sender) {
        if (
            message == 'I wanna beer' &&
            sender.name == 'Daddy'
        ) {
            if (this.fridge.hasBeer()) {
                this.daddy.notify(this.fridge.getBeer());
                this.mammy.notify('Daddy is drinking again')
            } else {
                this.daddy.notify(this.fridge.getBeer());
            }
        } else if (
            message == 'the scandal begins' &&
            sender.name == 'Mammy'
        ) {
            this.daddy.notify('Mammy swears')
        }
    }
}

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
