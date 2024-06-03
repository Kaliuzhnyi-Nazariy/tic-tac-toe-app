import PropTypes from "prop-types";
import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  const shouldRedirect = isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;