import styled from "styled-components";

export const HeadOfChatStyled = styled.span`
  width: 440px;
  border: 2px solid black;
  box-shadow: 0 0 0 2px black;
  background-color: orange;

  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  grid-template-areas: ". . t . c";
`;
