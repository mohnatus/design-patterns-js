/*
собственно объект итератора
interface Iterator {
    hasNext()
    next()
}

интерфейс коллекции для создания итераторов
interface Aggregate {
    createIterator()
}
*/

class MusicComposition {
    constructor(title, singer, genre) {
        this.title = title;
        this.singer = singer;
        this.genre = genre;
    }

    play() {
        console.log(`${this.title} sounds`)
    }
}

class MusicIterator {
    constructor(items) {
        this.items = items;
        this.position = 0;
    }

    next() {
        let currentItem = this.items[this.position];
        this.position++;
        return currentItem;
    }

    hasNext() {
        if (this.position >= this.items.length || this.items[this.position == null]) return false;
        else return true;
    }
}

class MusicStation {
    constructor(compositions) {
        this.compositions = compositions || []; 
    }

    addComposition(composition) {
        this.compositions.push(composition);
    }

    playComposition(composition) {
        composition.play();
    }

    createIterator() {
        return new MusicIterator(this.compositions);
    }
}


let champions = new MusicComposition('We are the Champions', 'Queen', 'rock');
let california = new MusicComposition('Hotel California', 'Eagles', 'rock');
let newYear = new MusicComposition('Happy New Year', 'Abba', 'pop');


let musicStation = new MusicStation([
    champions, california, newYear
]);

let iterator = musicStation.createIterator();

while(iterator.hasNext()) {
    let composition = iterator.next();
    if (composition.singer == 'Eagles') {
        musicStation.playComposition(composition);
        break;
    }
}

// Hotel California sounds

