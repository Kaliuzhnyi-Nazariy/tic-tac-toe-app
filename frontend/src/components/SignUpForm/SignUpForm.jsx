import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/Auth/auth";
import {
  Button,
  FormStyle,
  InputField,
  SignUpFormStyle,
} from "./SignUpForm.style";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ nickname, password, email }) => {
    dispatch(signup({ nickname, password, email }));
  };

  return (
    <SignUpFormStyle>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          nickname: "",
          password: "",
          email: "",
        }}
        onSubmit={handleSubmit}
      >
        <FormStyle>
          <label htmlFor="nickname">First Name</label>
          <InputField id="nickname" name="nickname" placeholder="Jane" />

          <label htmlFor="email">Email</label>
          <InputField
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="at least 6 symbols"
          />
          <Button type="submit">Submit</Button>
        </FormStyle>
      </Formik>
    </SignUpFormStyle>
  );
};

export default SignUpForm;
