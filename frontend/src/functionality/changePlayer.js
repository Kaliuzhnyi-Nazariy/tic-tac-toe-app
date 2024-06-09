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
