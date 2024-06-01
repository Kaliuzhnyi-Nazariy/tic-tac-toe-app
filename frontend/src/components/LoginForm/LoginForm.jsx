import { Formik, Field, Form } from "formik";

const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={console.log("submit")}
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
