import changePlayer from "./changePlayer";
import { checkWin } from "./checkWin";

let options = ["", "", "", "", "", "", "", "", ""];

export const resetOptions = () =>
  (options = ["", "", "", "", "", "", "", "", ""]);

export const updateCell = (e) => {
  const running = localStorage.getItem("runningGame") === "true";

  if (!running) {
    return;
  }

  if (!e) return; // Handle cases where 'e' is null or undefined

  const currentPlayer = changePlayer();
  // console.log("currentPlayer: ", currentPlayer);

  if (e.target.textContent != "") {
    console.log("Cell is already taken by", e.target.textContent);
    return;
  }

  localStorage.setItem("playerSymbol", currentPlayer);

  e.target.textContent = currentPlayer;
  options[e.target.id - 1] = currentPlayer;
  checkWin(options, currentPlayer);
};

export default updateCell;
