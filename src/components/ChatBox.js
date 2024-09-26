import React, { useState } from "react";
import "../styles/ChatBox.css";
import Rating from "./Rating";
import Feedback from "./Feedback";

const ChatBox = ({ chat, saveFeedback, feedback, setCurrentChat }) => {
  const [rating, setRating] = useState(feedback?.rating || 0);
  const [subjectiveFeedback, setSubjectiveFeedback] = useState(feedback?.text || "");
  const [thumbsUp, setThumbsUp] = useState(feedback?.thumbsUp || null);

  const handleSave = () => {
    saveFeedback(chat.id, { thumbsUp, rating, text: subjectiveFeedback });
    setCurrentChat(null);
  };

  return (
    <div className="chat-box">
      <h2>{chat.question}</h2>
      <p>{chat.response}</p>
      <div
        className="thumbs-container"
        onMouseEnter={() => document.getElementById(`thumbs-${chat.id}`).style.display = 'block'}
        onMouseLeave={() => document.getElementById(`thumbs-${chat.id}`).style.display = 'none'}
      >
        <div id={`thumbs-${chat.id}`} style={{ display: 'none' }}>
          <button onClick={() => setThumbsUp(true)}>👍</button>
          <button onClick={() => setThumbsUp(false)}>👎</button>
        </div>
      </div>
      <Rating rating={rating} setRating={setRating} />
      <Feedback value={subjectiveFeedback} onChange={setSubjectiveFeedback} />
      <button onClick={handleSave}>Save Feedback</button>
    </div>
  );
};

export default ChatBox;