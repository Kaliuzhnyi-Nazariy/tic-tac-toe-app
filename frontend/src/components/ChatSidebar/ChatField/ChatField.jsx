import FormInput from "../formInput/FormInput";
import { ChatFieldStyled } from "./ChatField.styled";

const ChatField = () => {
  return (
    <ChatFieldStyled>
      <div>Chat-Sidebar</div>
      <FormInput />
    </ChatFieldStyled>
  );
};

export default ChatField;
