import React from "react";
import { useWinnerContext } from "./context/WinnerContext";

function Square({ handleClick, value }) {
  const { winner } = useWinnerContext();
  return (
    <button
      disabled={!!value || !!winner}
      className={"square"}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default Square;
