"use client";

import { createContext, useContext, useState } from "react";

const buttonContext = createContext();
const buttonUpdateContext = createContext();
const buttonClearContext = createContext();

export function useButtonContext() {
  return useContext(buttonContext);
}

export function useButtonUpdateContext() {
  return useContext(buttonUpdateContext);
}

export function useButtonClearContext() {
  return useContext(buttonClearContext);
}

export function SelectProvider(props) {
  const [selectButton, setSelectButton] = useState(null);

  const updateSelectButton = (button) => {
    setSelectButton(button);
  };

  const clearSelectButton = () => {
    setSelectButton(null);
  };

  return (
    <buttonContext.Provider value={selectButton}>
      <buttonUpdateContext.Provider value={updateSelectButton}>
        <buttonClearContext.Provider value={clearSelectButton}>
          {props.children}
        </buttonClearContext.Provider>
      </buttonUpdateContext.Provider>
    </buttonContext.Provider>
  );
}
