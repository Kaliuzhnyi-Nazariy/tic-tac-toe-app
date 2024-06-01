export const checkRunning = () => {
  // console.log(localStorage.getItem("runningGame"));
  return Boolean(localStorage.getItem("runningGame"));
};

const runningGame = (isRunning) => {
  if (isRunning === true || isRunning === false) {
    localStorage.setItem("runningGame", isRunning);
  }
  const isRunning2 = localStorage.getItem("runningGame") === "true";
  return isRunning2;
};

export default runningGame;
