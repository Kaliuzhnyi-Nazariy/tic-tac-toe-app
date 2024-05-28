import ChatSidebar from "../components/ChatSidebar/ChatSidebar";
import GameField from "../components/GameField/GameField";
// import { FieldCell } from "../components/GameFieldCell/gameFieldCell.styled";
import "../functionality/main";

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GameField />
      {/* <span className="status-text">Hello</span> */}
      <ChatSidebar />
    </div>
  );
};

export default Home;
