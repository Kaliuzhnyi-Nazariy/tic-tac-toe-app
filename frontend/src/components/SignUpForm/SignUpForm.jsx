import { Formik, Field, Form } from "formik";

const SignUpForm = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          nickname: "",
          password: "",
          email: "",
        }}
        onSubmit={() => console.log("haha registered!")}
      >
        <Form>
          <label htmlFor="nickname">First Name</label>
          <Field id="nickname" name="nickname" placeholder="Jane" />

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

export default SignUpForm;
