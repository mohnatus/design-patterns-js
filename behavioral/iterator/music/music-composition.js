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

export default MusicComposition;