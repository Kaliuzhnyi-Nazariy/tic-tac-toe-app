import ChatSidebar from "../../components/ChatSidebar/ChatSidebar";
import GameField from "../../components/GameField/GameField";
import { initializeGame } from "../../functionality/initializeGame";
import "../../functionality/main";
import { checkRunning } from "../../functionality/utils/runningGame";
// import { checkRunning } from "../functionality/utils/runningGame";
import { MainBlock } from "./Home.styled";

const Home = () => {
  // console.log(checkRunning() === "true");
  console.log(checkRunning());
  return (
    <MainBlock>
      <GameField />
      <span
        style={{
          width: "555px",
          gridArea: "in",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          className="status-text"
          style={{
            gridArea: "st",
            alignSelf: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Hello! For playing push a button below!
        </span>
        <button
          type="button"
          style={{ gridArea: "sb" }}
          onClick={() => initializeGame()}
          // disabled={checkRunning()}
        >
          start game!
        </button>
      </span>
      <ChatSidebar style={{ gridArea: "cs" }} />
    </MainBlock>
  );
};

export default Home;