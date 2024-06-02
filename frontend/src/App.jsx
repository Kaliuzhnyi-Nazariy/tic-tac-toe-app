import "./App.css";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/Routes/PrivateRoute";
import RestrictedRoute from "./components/Routes/RestrictedRoute";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<RestrictedRoute component={<Home />} redirectTo="/" />}
        ></Route>
      </Route>
      <Route
        path="/signup"
        element={<RestrictedRoute redirectTo="/" component={<Signup />} />}
      ></Route>
      <Route
        path="/login"
        element={<PrivateRoute component={<Login />} redirectTo="/login" />}
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
