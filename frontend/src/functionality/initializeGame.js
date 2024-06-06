// import { resetOptions } from "./updateCell";
// import randomizeSymbol from "./utils/randomizeSymbol";
// import runningGame, { checkRunning } from "./utils/runningGame";

// export const initializeGame = () => {
//   const statusText = document.querySelector(".status-text");
//   const cell = document.querySelectorAll(".cell");
//   console.log("initialized");
//   runningGame(true);

//   for (let i = 0; i < cell.length; i++) {
//     cell[i].textContent = "";
//   }

//   resetOptions();
//   checkRunning();

//   localStorage.setItem("runningGame", true);
//   // checkRunningGame();
//   const users = randomizeSymbol();
//   // console.log(users.user1);
//   // console.log(users.user2);

//   localStorage.setItem("player1", users.user1);
//   localStorage.setItem("player2", users.user2);

//   const curUser = localStorage.getItem("playerSymbol");
//   // console.log("curUser: ", curUser);

//   statusText.textContent = `${curUser}'s turn`;

//   // const player1 = randomizeSymbol();
//   // console.log(player1);
//   localStorage.setItem("playerSymbol", `"${users.user1}"`);
// };

// export default initializeGame;

import findOpponent from "../../../backend/utils/findOpponent";
import { resetOptions } from "./updateCell";
import randomizeSymbol from "./utils/randomizeSymbol";
import runningGame, { checkRunning } from "./utils/runningGame";

export const initializeGame = () => {
  const statusText = document.querySelector(".status-text");
  const cells = document.querySelectorAll(".cell");
  console.log("initialized");
  runningGame(true);

  cells.forEach((cell) => (cell.textContent = ""));
  resetOptions();
  checkRunning();

  findOpponent();

  localStorage.setItem("runningGame", "true");
  const users = randomizeSymbol();

  localStorage.setItem("player1", users.user1);
  localStorage.setItem("player2", users.user2);

  const curUser = users.user1;
  statusText.textContent = `${curUser}'s turn`;

  localStorage.setItem("playerSymbol", curUser);
};

export default initializeGame;
