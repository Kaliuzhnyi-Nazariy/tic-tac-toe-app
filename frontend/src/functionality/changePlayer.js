// const changePlayer = () => {
//   let plSym1 = localStorage.getItem("player1");
//   let plSym2 = localStorage.getItem("player2");
//   console.log("plSym1: ", plSym1);
//   console.log("plSym2: ", plSym2);
//   let main;
//   main = plSym1 === "X" ? plSym1 : plSym2;
//   console.log("main: ", main);
//   //   localStorage.setItem("playerSymbol", `"${plSym}"`);
//   //   console.log(plSym);
//   return main;
// };

// export default changePlayer;

const changePlayer = () => {
  const plSymVal = localStorage.getItem("playerSymbol");
  const statusText = document.querySelector(".status-text");

  let plSym;
  plSym = plSymVal === "X" ? "O" : "X";
  // console.log("main: ", plSym);

  //   localStorage.setItem("playerSymbol", `"${plSym}"`);
  // console.log(plSym);
  statusText.textContent = `${plSym}'s turn`;
  return plSym;
};

export default changePlayer;
