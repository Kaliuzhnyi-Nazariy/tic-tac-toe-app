import GameFieldCell from "../GameFieldCell/gameFieldCell";

const GameField = () => {
  const fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <GameField>
      {fields.map((field) => (
        <GameFieldCell key={field}></GameFieldCell>
      ))}
    </GameField>
  );
};

export default GameField;
