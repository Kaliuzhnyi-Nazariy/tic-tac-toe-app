const randomizeSymbol = () => {
  const user1 = Math.random() > 0.5 ? "X" : "O";
  let user2;
  if (user1 === "X") {
    user2 = "O";
  } else {
    user2 = "X";
  }
  return { user1, user2 };
};

export default randomizeSymbol;
