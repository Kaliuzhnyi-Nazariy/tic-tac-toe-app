import randomizeSymbol from "./utils/randomizeSymbol";
import runningGame from "./utils/runningGame";

export const initializeGame = () => {
  const statusText = document.querySelector(".status-text");
  console.log("initialized");
  runningGame(true);

  localStorage.setItem("runningGame", true);
  const users = randomizeSymbol();
  // console.log(users.user1);
  // console.log(users.user2);

  localStorage.setItem("player1", users.user1);
  localStorage.setItem("player2", users.user2);

  const curUser = localStorage.getItem("playerSymbol");
  // console.log("curUser: ", curUser);

  statusText.textContent = `${curUser}'s turn`;

  // const player1 = randomizeSymbol();
  // console.log(player1);
  localStorage.setItem("playerSymbol", `"${users.user1}"`);
};

export default initializeGame;
