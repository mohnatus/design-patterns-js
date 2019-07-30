import MusicIterator from "./music-iterator";

/*
Коллекция музыкальных композиций

интерфейс коллекции для создания итераторов
interface Aggregate {
    createIterator()
}
*/
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

export default MusicStation;