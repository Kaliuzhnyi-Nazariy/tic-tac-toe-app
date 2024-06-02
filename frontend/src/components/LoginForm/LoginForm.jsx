import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Auth/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="at least 6 symbols"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
