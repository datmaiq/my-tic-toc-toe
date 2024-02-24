import React from "react";

function History({ history }) {
  return (
    <div>
      <h1>History</h1>
      {history.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {index + 1} {item.user} go to #{item.location}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default History;
