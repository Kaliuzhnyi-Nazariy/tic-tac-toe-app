// import React from 'react'

import ChatField from "./ChatField/ChatField.jsx";
import { AsideStyled } from "./ChatSidebar.styled.jsx";
import HeadOfChat from "./HeadOfChat/HeadOfChat.jsx";

const ChatSidebar = () => {
  return (
    <AsideStyled>
      <HeadOfChat />
      <ChatField />
    </AsideStyled>
  );
};

export default ChatSidebar;
