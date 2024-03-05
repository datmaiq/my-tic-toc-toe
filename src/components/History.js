import React from "react";

function History({ history, handleHistory }) {
  return (
    <div wrap-history>
      <h1>History</h1>
      <div className="history">
        {history.map((item, index) => {
          return (
            <button
              className="button-history"
              onClick={() => handleHistory(index)}
            >
              {index + 1} go to #{index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default History;
