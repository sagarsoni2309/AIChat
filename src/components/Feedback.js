import React from "react";


const Feedback = ({ value, onChange }) => {
  return (
    <textarea
      className="feedback-textarea"
      placeholder="Leave your feedback..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Feedback;