import { initializeGame } from "./initializeGame";
import updateCell from "./updateCell";

let running = false;

function checkRunning(running) {
  if (running === false) {
    updateCell(null); // Pass 'null' as the event
    return;
  }
  initializeGame();
}

checkRunning(running);
