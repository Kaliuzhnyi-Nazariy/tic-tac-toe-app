export const updateText = (plSymVal) => {
  const statusText = document.querySelector(".status-text");

  // console.log(localStorage.getItem("userNickname"));
  // console.log(localStorage.getItem("user2Nickname"));
  console.log("userSymb: ", localStorage.getItem("userSymb"));
  console.log("user2Symbol: ", localStorage.getItem("user2Symbol"));
  const userSymb = localStorage.getItem("userSymb");
  const userName = localStorage.getItem("userNickname");
  const opponentName = localStorage.getItem("user2Nickname");

  console.log("plSymVal: ", plSymVal);
  if (plSymVal === userSymb) {
    statusText.textContent = `${userName}'s turn!`;
  } else {
    statusText.textContent = `${opponentName}'s turn!`;
  }
};

export default updateText;
