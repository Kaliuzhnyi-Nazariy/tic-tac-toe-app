import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectToken,
  selectUser,
} from "../../redux/Auth/selectors";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return { user, token, isLoggedIn };
};
