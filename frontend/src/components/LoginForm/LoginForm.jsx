import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Auth/auth";
import {
  Button,
  FormStyle,
  InputField,
  Label,
  LoginFormStyle,
} from "./LoginForm.style";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  return (
    <LoginFormStyle>
      <h2>Login</h2>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={handleSubmit}
      >
        <FormStyle>
          <Label htmlFor="email">Email</Label>
          <InputField
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <Label htmlFor="password">Password</Label>
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="at least 6 symbols"
          />
          <Button type="submit">Login</Button>
        </FormStyle>
      </Formik>
    </LoginFormStyle>
  );
};

export default LoginForm;
