const justUtil = ({ user, user2 }) => {
  console.log("user, user2: ", user, user2);
  const { nickname: playerNickname, symbol: playerSetedSymbol } = user;
  console.log("user: ", playerNickname, playerSetedSymbol);
  const { nickname, symbol } = user2;
  console.log("user2: ", nickname, symbol);

  if (playerSetedSymbol === "X") {
    localStorage.setItem("playerSymbol", playerSetedSymbol);
  }

  localStorage.setItem("playerSymbol", symbol);
};

export default justUtil;
