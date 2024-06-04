import { useAuth } from "../hook/useAuth.js";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn } = useAuth();

  console.log(redirectTo);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
