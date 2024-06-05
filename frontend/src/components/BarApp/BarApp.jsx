import { useDispatch } from "react-redux";
import { logout } from "../../redux/Auth/auth";
import { useAuth } from "../hook/useAuth.js";
import { ButtonsGroup, NavBar } from "./BarApp.style.jsx";
import { ExitButton, LoginButton, SignUpButton } from "./Buttons.style.jsx";

const BarApp = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };

  const { isLoggedIn } = useAuth();

  return (
    <NavBar>
      <h1 style={{}}>MyTicTacToe</h1>
      {isLoggedIn ? (
        <ExitButton style={{ marginLeft: "auto" }} onClick={handleClick}>
          exit
        </ExitButton>
      ) : (
        <ButtonsGroup>
          <SignUpButton to={"/signup"}>Signup</SignUpButton>
          <LoginButton to={"/login"}>Login</LoginButton>
        </ButtonsGroup>
      )}
    </NavBar>
  );
};

export default BarApp;
