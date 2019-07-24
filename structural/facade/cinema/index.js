import { Light, Screen, Projector, Music } from "./cinema";
import { CinemaFacade } from "./facade";

let light = new Light();
let screen = new Screen();
let projector = new Projector();
let music = new Music();

let cinema = new CinemaFacade(light, screen, projector, music);
cinema.start();