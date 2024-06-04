import { useDispatch } from "react-redux";
import { logout } from "../../redux/Auth/auth";

const BarApp = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <nav
      style={{
        display: "flex",
        // gridTemplateRows: "3fr, 3   fr",
        // gridTemplateAreas: ". n . e",
        alignItems: "center",
        width: "1280px",
      }}
    >
      <h1 style={{}}>MyTicTacToe</h1>
      <button style={{ marginLeft: "auto" }} onClick={handleClick}>
        exit
      </button>
    </nav>
  );
};

export default BarApp;
