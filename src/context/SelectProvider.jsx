"use client";

import { createContext, useContext, useEffect, useState } from "react";

const buttonContext = createContext();
const buttonUpdateContext = createContext();
const slideContext = createContext();
const slideUpdateContext = createContext();

// 🌿
export function useButtonContext() {
  return useContext(buttonContext);
}

export function useButtonUpdateContext() {
  return useContext(buttonUpdateContext);
}

export function useSlideContext() {
  return useContext(slideContext);
}

export function useSlideUpdateContext() {
  return useContext(slideUpdateContext);
}

// 🧠
export function SelectProvider(props) {
  const [selectButton, setSelectButton] = useState(null);

  const updateSelectButton = (button) => {
    setSelectButton(button);
    setSlideControl(true);
  };

  const [slideControl, setSlideControl] = useState(false);

  const handleSlide = () => {
    setSlideControl(false);
  };

  return (
    <slideContext.Provider value={slideControl}>
      <slideUpdateContext.Provider value={handleSlide}>
        <buttonContext.Provider value={selectButton}>
          <buttonUpdateContext.Provider value={updateSelectButton}>
            {props.children}
          </buttonUpdateContext.Provider>
        </buttonContext.Provider>
      </slideUpdateContext.Provider>
    </slideContext.Provider>
  );
}
