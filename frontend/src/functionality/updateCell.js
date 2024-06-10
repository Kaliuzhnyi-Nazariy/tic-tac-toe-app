import changePlayer from "./changePlayer";
import { checkWin } from "./checkWin";
import updateTextSub from "./utils/updateTextSub";

let options = ["", "", "", "", "", "", "", "", ""];

export const resetOptions = () =>
  (options = ["", "", "", "", "", "", "", "", ""]);

export const updateCell = (e) => {
  const running = localStorage.getItem("runningGame") === "true";

  if (!running) {
    return;
  }

  if (!e) return; // Handle cases where 'e' is null or undefined

  const currentPlayer = localStorage.getItem("playerSymbol");

  if (e.target.textContent !== "") {
    console.log("Cell is already taken ", e.target.textContent);
    return;
  }

  e.target.textContent = currentPlayer;
  options[e.target.id - 1] = currentPlayer;

  // Check for win condition
  checkWin(options, currentPlayer);
  const plSymVal = localStorage.getItem("playerSymbol");
  updateTextSub(plSymVal);

  // Switch player
  changePlayer();
};

export default updateCell;
