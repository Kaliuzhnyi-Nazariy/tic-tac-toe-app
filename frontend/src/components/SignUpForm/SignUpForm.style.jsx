import { Field, Form } from "formik";
import styled from "styled-components";

export const SignUpFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  background-color: #ffdb58;
  color: black;

  padding: 16px;
  border-radius: 24px;
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 75%;
`;

export const Label = styled.label`
  /* color: white; */
`;

export const InputField = styled(Field)`
  padding: 8px;
  border-radius: 16px;

  &:focus,
  &:hover,
  &:active {
    outline: 2px solid white;
  }
`;

export const Button = styled.button`
  padding: 8px 8px;
  width: 150px;
  margin: auto;

  border-radius: 16px;
  border: 1px solid orange;

  background-color: #fff;
  color: black;

  font-size: 16px;

  &:focus,
  &:hover {
    background-color: orange;
    color: #fff;
  }
`;
