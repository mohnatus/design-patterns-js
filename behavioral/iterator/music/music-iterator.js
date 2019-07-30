/*
собственно объект итератора
interface Iterator {
    hasNext()
    next()
}
*/


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

export default MusicIterator;