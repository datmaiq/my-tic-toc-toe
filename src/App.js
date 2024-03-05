import React from "react";
import "./App.css";
import Game from "./components/Game";
import { WinnerProvider } from "./components/context/WinnerContext";
function App() {
  return (
    <div className="container">
      <WinnerProvider>
        <Game />
      </WinnerProvider>
    </div>
  );
}

export default App;
