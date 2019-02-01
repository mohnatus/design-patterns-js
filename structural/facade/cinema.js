class Light {
    on() {
        console.log('свет включился');
    }

    off() {
        console.log('свет выключился');
    }
}

class Screen {
    on() {
        console.log('экран включился');
    }

    off() {
        console.log('экран выключился');
    }
}

class Projector {
    on() {
        console.log('проектор включился');
    }

    off() {
        console.log('проектор выключился');
    }
}

class Music {
    on() {
        console.log('музыкальная система включилась');
    }

    off() {
        console.log('музыкальная система выключилась');
    }
}

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

let light = new Light();
let screen = new Screen();
let projector = new Projector();
let music = new Music();

let cinema = new CinemaFacade(light, screen, projector, music);
cinema.start();
// свет выключился
// экран включился
// проектор включился
// музыкальная система включилась