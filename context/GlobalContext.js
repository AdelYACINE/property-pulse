"use client";

import { useState, createContext, useContext } from "react";

//create context

const GlobalContext = createContext();

//create provider

export const GlobalProvider = ({ children }) => {
  const [UnReadCount, setUnReadCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ UnReadCount, setUnReadCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

//create custom hook to access context

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
