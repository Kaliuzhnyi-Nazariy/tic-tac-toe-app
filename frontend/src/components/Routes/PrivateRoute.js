import PropTypes from "prop-types";
import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;

// import { useAuth } from "../hook/useAuth";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const { isLoggedIn } = useAuth();

//   const shouldRedirect = !isLoggedIn;

//   console.log(shouldRedirect);
//   return shouldRedirect ? Navigate : Component;
// };

// export default PrivateRoute;
