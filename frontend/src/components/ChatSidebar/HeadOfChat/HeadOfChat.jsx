import CloseBtn from "./CloseBtn/CloseBtn.jsx";
import { HeadOfChatStyled } from "./HeadOfChat.styled";
import Title from "./Title/Title.jsx";

const HeadOfChat = () => {
  return (
    <HeadOfChatStyled>
      <Title />
      <CloseBtn />
    </HeadOfChatStyled>
  );
};

export default HeadOfChat;
