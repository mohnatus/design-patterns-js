/**
 * Различные реализации одних и тех же крестиков-ноликов
 * с помощью паттерна Мост
 */

import { TicTacToe } from "./tic-tac-toe-logic";
import { TicTacToe3D, TicTacToeCanvas } from "./tic-tac-toe-implementations";

let game3d = new TicTacToe(new TicTacToe3D());
game3d.start(); 

let gameCanvas = new TicTacToe(new TicTacToeCanvas());
gameCanvas.start();