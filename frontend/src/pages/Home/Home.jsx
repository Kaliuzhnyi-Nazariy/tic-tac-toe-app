import ChatSidebar from "../../components/ChatSidebar/ChatSidebar";
import GameField from "../../components/GameField/GameField";
import { useGame } from "../../components/hook/useGame";
import { initializeGame } from "../../functionality/initializeGame";
import "../../functionality/main";
import { useDispatch } from "react-redux";
import { MainBlock } from "./Home.styled";
import { changeIsSearching, findOpponent } from "../../redux/Game/game";
import { refreshUser } from "../../redux/Auth/auth";
import justUtil from "../../functionality/utils/justUtil";

const Home = () => {
  const dispatch = useDispatch();
  const { gameInfo } = useGame();
  const handleSubmit = () => {
    initializeGame();
    dispatch(refreshUser());
    dispatch(changeIsSearching(true));
    dispatch(findOpponent());
    justUtil(gameInfo);
  };

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
        ></span>
        {/* <UpdateText /> */}
        <button
          type="button"
          style={{ gridArea: "sb" }}
          onClick={() => handleSubmit()}
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
