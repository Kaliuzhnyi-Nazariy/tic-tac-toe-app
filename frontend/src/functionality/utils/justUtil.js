const justUtil = ({ user, user2 }) => {
  // console.log("user, user2: ", user, user2);
  const { nickname: playerNickname, symbol: playerSetedSymbol } = user;
  console.log("user: ", playerNickname, playerSetedSymbol);
  const { nickname, symbol } = user2;
  console.log("user2: ", nickname, symbol);

  console.log(playerSetedSymbol === "X");

  console.log("playerNickname: ", playerNickname);

  localStorage.setItem("userNickname", playerNickname);
  localStorage.setItem("userSymb", playerSetedSymbol);

  localStorage.setItem("user2Nickname", nickname);
  localStorage.setItem("user2Symbol", symbol);

  if (playerSetedSymbol === "X") {
    localStorage.setItem("playerSymbol", playerSetedSymbol);
  } else {
    localStorage.setItem("playerSymbol", symbol);
  }
};

export default justUtil;
