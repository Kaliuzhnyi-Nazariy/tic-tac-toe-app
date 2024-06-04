import PropTypes from "prop-types";

import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

const RestrictRoute = ({ component: Component, redirectTo }) => {
  console.log(Component, redirectTo);

  let { isLoggedIn } = useAuth();
  const ShouldRedirect = !isLoggedIn;
  return ShouldRedirect ? Component : <Navigate to={redirectTo} />;
};

RestrictRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};

export default RestrictRoute;
