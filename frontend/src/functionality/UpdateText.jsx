// import { useGame } from "../components/hook/useGame";
// import { useEffect, useState } from "react";
// import updateTextSub from "./utils/updateTextSub";

// const UpdateText = () => {
//   const { gameInfo } = useGame();
//   const [plSymVal, setPlSymVal] = useState(updateTextSub());

//   useEffect(() => {
//     const statusText = document.querySelector(".status-text");
//     console.log(plSymVal);
//     if (!gameInfo || !statusText) return; // Ensure gameInfo and statusText are available before proceeding

//     const nicknameToShow =
//       gameInfo.user?.symbol === plSymVal
//         ? gameInfo.user?.nickname
//         : gameInfo.user2?.nickname;
//     setPlSymVal(nicknameToShow);
//     console.log(nicknameToShow);

//     if (nicknameToShow === undefined) {
//       statusText.textContent = "Hello! To play, push a button below!";
//     } else {
//       statusText.textContent = `${nicknameToShow}'s turn`;
//     }
//   }, [gameInfo, plSymVal]); // Added gameInfo as a dependency

//   return null; // Since this component is managing side effects, it doesn't render any UI
// };

// export default UpdateText;
