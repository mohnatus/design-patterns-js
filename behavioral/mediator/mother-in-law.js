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
        super.notify(message);
        if (message == 'bottle of beer') {
            this.rejoice();
        } else if (message == 'no beer') {
            this.anger();
        } else if (message == 'Mammy swears at you') {
            this.argue();
        }
    }

    getBeer() {
        console.log(`${this.name}: I wanna beer`);
        this.mediator.send('I wanna beer', this);
    }

    rejoice() {
        console.log(`${this.name}: Yeeah! My beer!`);
    }

    anger() {
        console.log(`${this.name}: Who the hell drank all my beer?`);
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

    addBeer(bottles) {
        this.bottles = bottles;
    }

    getBeer() {
        if (this.bottles > 0) {
            this.bottles--;
            return true;
        }
        return false;
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
            if (this.fridge.getBeer()) {
                this.daddy.notify('bottle of beer');
                this.mammy.notify('Daddy is drinking again')
            } else {
                this.daddy.notify('no beer');
            }
        } else if (
            message == 'the scandal begins' &&
            sender.name == 'Mammy'
        ) {
            this.daddy.notify('Mammy swears at you');
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
// Daddy: I wanna beer
// Daddy gets message: no beer
// Daddy:Who the hell drank all my beer?

fridge.addBeer(2);
daddy.getBeer();
// Daddy: I wanna beer
// Daddy gets message: bottle of beer
// Daddy: Yeeah! My beer!
// Mammy gets message: Daddy is drinking again
// Mammy: You are f*king alconaut!
// Daddy gets message: Mammy swears at you
// Daddy: I am a grown man!!!
