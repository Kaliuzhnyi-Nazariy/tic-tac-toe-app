import "./App.css";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/Routes/PrivateRoute";
import RestrictedRoute from "./components/Routes/RestrictedRoute";
import { lazy } from "react";
// import RestrictRoute from "./components/Routes/RestrictRoute";

const Home = lazy(() => import("./pages/Home/Home"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Login = lazy(() => import("./pages/Login/Login"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<PrivateRoute redirectTo="/login" component={<Home />} />}
        />
        <Route
          path="/signup"
          element={<RestrictedRoute redirectTo="/" component={<Signup />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<Login />} redirectTo="/" />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
