import MusicComposition from "./music-composition";
import MusicStation from "./music-station";


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