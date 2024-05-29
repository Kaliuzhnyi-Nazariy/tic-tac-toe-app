import runningGame from "./utils/runningGame";

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWin = (options, currentPlayer) => {
  const statusText = document.querySelector(".status-text");
  let roundWon = false;

  console.log(statusText);

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;

      localStorage.setItem("runningGame", false);
      runningGame(false);
      console.log(currentPlayer, "won");
      statusText.textContent = `${currentPlayer} wins!`;
      break;
    }
  }

  console.log("roundWon: ", roundWon);
  console.log("options: ", options);

  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins!`;
    // running = false;
  } else if (!options.includes("")) {
    statusText.textContent = `Draw!`;
    // running = false;
  } else {
    // changePlayer();
  }
};
