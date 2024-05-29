import ChatSidebar from "../components/ChatSidebar/ChatSidebar";
import GameField from "../components/GameField/GameField";
import { initializeGame } from "../functionality/initializeGame";
// import { FieldCell } from "../components/GameFieldCell/gameFieldCell.styled";
import "../functionality/main";
import { MainBlock } from "./Home.styled";

const Home = () => {
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
          Hello
        </span>
        <button
          type="button"
          style={{ gridArea: "sb" }}
          onClick={() => initializeGame()}
        >
          start game!
        </button>
      </span>
      <ChatSidebar style={{ gridArea: "cs" }} />
    </MainBlock>
  );
};

export default Home;
