import styled from "styled-components";

export const FormStyled = styled.form`
  display: grid;
  grid-template-areas: "i i i i i i b";

  margin: 4px;

  gap: 4px;
`;

export const InputField = styled.input`
  padding: 4px;

  grid-area: i;

  border: 2px solid black;
  border-radius: 4px;
`;
