import { useSelector } from "react-redux";
import { selectGameInfo, selectIsSearching } from "../../redux/Game/selectors";

export const useGame = () => {
  const isSearching = useSelector(selectIsSearching);
  const gameInfo = useSelector(selectGameInfo);
  return { isSearching, gameInfo };
};
