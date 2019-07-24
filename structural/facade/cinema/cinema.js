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

export { Light, Screen, Projector, Music };

