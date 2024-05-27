import { FormStyled, InputField } from "./FormInput.style";
import FormButton from "./formButton/formButton";

const FormInput = () => {
  return (
    <FormStyled>
      <InputField type="text"></InputField>
      <FormButton />
    </FormStyled>
  );
};

export default FormInput;
