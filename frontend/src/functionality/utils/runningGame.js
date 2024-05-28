let running = false;
const runningGame = (isRunning) => {
  if (isRunning !== true || isRunning !== false) {
    return;
  }
  running = isRunning;
  console.log(running);
  //   return (running = isRunning);
};

export default runningGame;
