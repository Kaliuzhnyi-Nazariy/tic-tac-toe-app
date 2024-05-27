import ChatSidebar from "../components/ChatSidebar/ChatSidebar";
import GameField from "../components/GameField/GameField";
// import { FieldCell } from "../components/GameFieldCell/gameFieldCell.styled";

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GameField />
      <ChatSidebar />
    </div>
  );
};

export default Home;
