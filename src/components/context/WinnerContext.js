import { createContext, useContext, useState } from "react";

const WinnerContext = createContext({});

export const useWinnerContext = () => useContext(WinnerContext);

export const WinnerProvider = ({ children }) => {
  const [winner, setWinner] = useState(null);

  return (
    <WinnerContext.Provider
      value={{
        winner,
        setWinner,
      }}
    >
      {children}
    </WinnerContext.Provider>
  );
};
