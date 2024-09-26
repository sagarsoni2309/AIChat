import React, { useState } from "react";
import "../styles/FeedbackTable.css";

const FeedbackTable = ({ feedback }) => {
  const [filter, setFilter] = useState(0);

  const filteredFeedback = Object.entries(feedback).filter(
    ([, data]) => data.rating >= filter
  );

  return (
    <div className="feedback-table">
      <h2>Feedback Table</h2>
      <label>Filter by Rating: </label>
      <select onChange={(e) => setFilter(parseInt(e.target.value))}>
        <option value={0}>All</option>
        <option value={1}>1 star & up</option>
        <option value={2}>2 stars & up</option>
        <option value={3}>3 stars & up</option>
        <option value={4}>4 stars & up</option>
        <option value={5}>5 stars</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Conversation</th>
            <th>Thumbs Up</th>
            <th>Rating</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeedback.map(([id, data]) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{data.thumbsUp ? "👍" : "👎"}</td>
              <td>{data.rating}</td>
              <td>{data.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;