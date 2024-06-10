const changePlayer = () => {
  const plSymVal = localStorage.getItem("playerSymbol");
  const statusText = document.querySelector(".status-text");

  if (!plSymVal) {
    console.error("playerSymbol is not set in localStorage.");
    return;
  }

  if (!statusText) {
    console.error(".status-text element not found.");
    return;
  }

  let plSym = plSymVal === "X" ? "O" : "X";
  // Update the status text
  // statusText.textContent = `${plSym}'s turn`;
  // Update localStorage with the new player symbol
  localStorage.setItem("playerSymbol", plSym);

  return plSym;
};

export default changePlayer;
