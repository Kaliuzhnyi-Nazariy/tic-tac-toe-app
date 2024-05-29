import { updateCell } from "../../functionality/updateCell.js";
import { FieldCell } from "./gameFieldCell.styled";

const GameFieldCell = ({ id }) => {
  return (
    <FieldCell
      className="cell"
      id={id}
      onClick={(e) => updateCell(e, null)}
    ></FieldCell>
  );
};

export default GameFieldCell;
