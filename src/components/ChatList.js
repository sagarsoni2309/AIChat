import React from "react";
import "../styles/ChatList.css";

const ChatList = ({ conversations, setCurrentChat, feedback }) => {
  return (
    <div className="chat-list">
      {conversations.map((chat) => (
        <div
          key={chat.id}
          className="chat-item"
          onClick={() => setCurrentChat(chat)}
        >
          <h2>{chat.question}</h2>
          <p>{feedback[chat.id] ? "Feedback Provided" : "No Feedback Yet"}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatList;