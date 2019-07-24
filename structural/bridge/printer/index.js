/**
 * Выбор чернил для принтера с помощью паттерна Мост
 */

import { EpsonPrinter, HPPrinter } from "./printer";
import { AcrylicInk, AlcoholInk } from "./ink";

let epsonPrinter = new EpsonPrinter(new AcrylicInk());
let hpPrinter = new HPPrinter(new AlcoholInk());

epsonPrinter.print();
hpPrinter.print();

