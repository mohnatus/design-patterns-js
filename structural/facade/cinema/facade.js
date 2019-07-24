class CinemaFacade {
  constructor(light, screen, projector, music) {
      this.light = light;
      this.screen = screen;
      this.projector = projector;
      this.music = music;
  }

  start() {
      this.light.off();
      this.screen.on();
      this.projector.on();
      this.music.on();
  }

  stop() {
      this.projector.off();
      this.music.off();
      this.screen.off();
      this.light.on();
  }
}

export { CinemaFacade };