import styled from "styled-components";

export const GameField = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);

  grid-template-areas: "f f f", "f f f", "f f f";
`;
