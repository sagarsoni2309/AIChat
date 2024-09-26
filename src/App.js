import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import ChatList from "./components/ChatList";
import FeedbackTable from "./components/FeedbackTable";
import Footer from "./components/Footer";
import data from "./data/sampleData.json";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [conversations, setConversations] = useState(data);
  const [currentChat, setCurrentChat] = useState(null);
  const [feedback, setFeedback] = useState({});

  const toggleMode = () => setDarkMode((prevMode) => !prevMode);

  const saveFeedback = (chatId, feedbackData) => {
    setFeedback((prev) => ({ ...prev, [chatId]: feedbackData }));
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header darkMode={darkMode} toggleMode={toggleMode} />
      {currentChat ? (
        <ChatBox
          chat={currentChat}
          saveFeedback={saveFeedback}
          feedback={feedback[currentChat.id]}
          setCurrentChat={setCurrentChat}
        />
      ) : (
        <ChatList
          conversations={conversations}
          setCurrentChat={setCurrentChat}
          feedback={feedback}
        />
      )}
      <FeedbackTable feedback={feedback} />
      <Footer />
    </div>
  );
};

export default App;