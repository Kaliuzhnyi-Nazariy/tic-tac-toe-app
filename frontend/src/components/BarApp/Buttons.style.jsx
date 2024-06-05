import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpButton = styled(Link)`
  padding: 8px;
  background-color: olive;
  border-radius: 8px;
  border: 1px solid olive;
  color: white;
  text-decoration: none;

  transition: background-color 0.25s, color 0.5s, transform 0.5s;
  transform-origin: center;

  &:hover {
    background-color: white;
    color: olive;
    transform: scale(1.1);
  }
`;

export const LoginButton = styled(Link)`
  padding: 8px;
  border: 1px solid olive;
  border-radius: 8px;

  color: white;
  text-decoration: none;

  transition: all 500ms;

  &:hover {
    background-color: olive;
    transform: scale(1.2);
  }
`;

export const ExitButton = styled.button`
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  color: olive;
  font-weight: 700;
  border: 2px solid olive;
  border-radius: 8px;
  text-transform: capitalize;

  cursor: pointer;

  transition: 0.25s;

  &:hover,
  &focus {
    color: white;
    background-color: olive;
    transform: scale(1.1);
  }
`;
