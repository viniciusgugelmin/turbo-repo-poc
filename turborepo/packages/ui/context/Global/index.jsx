import { createContext, useContext, useMemo, useState } from "react";

const defaultState = {
  count: 0,
  setCount: (newValue) => newValue,
};

const GlobalContext = createContext(defaultState);

const GlobalContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const contextValue = useMemo(
    () => ({
      count,
      setCount,
    }),
    [count],
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
