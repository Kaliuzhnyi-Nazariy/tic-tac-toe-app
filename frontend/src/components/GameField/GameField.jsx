import GameFieldCell from "../GameFieldCell/gameFieldCell.jsx";
import "./GameField.styled.css";
// import "../../functionality/initializeGame.js";

const GameField = () => {
  const fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // console.log(fields);
  return (
    <>
      <div className="gameField">
        {fields.map((field) => (
          <GameFieldCell id={field} key={field} />
        ))}
      </div>
      <span className="status-text"></span>
    </>
  );
};

export default GameField;
