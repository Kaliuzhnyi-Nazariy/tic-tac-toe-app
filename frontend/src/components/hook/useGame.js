import { useSelector } from "react-redux";
import { selectIsSearching } from "../../redux/Game/selectors";

export const useGame = () => {
  const isSearching = useSelector(selectIsSearching);
  return { isSearching };
};
