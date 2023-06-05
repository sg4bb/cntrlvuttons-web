"use client";

import { createContext, useContext, useState } from "react";

const searchContext = createContext();
const searchUpdateContext = createContext();

export function useSearchContext() {
  return useContext(searchContext);
}

export function useSearchUpdateContext() {
  return useContext(searchUpdateContext);
}

export function SearchProvider(props) {
  const [search, setSearch] = useState(" ");

  const updateSearch = (currentSearch) => {
    setSearch(currentSearch);
  };

  return (
    <searchContext.Provider value={search}>
      <searchUpdateContext.Provider value={updateSearch}>
        {props.children}
      </searchUpdateContext.Provider>
    </searchContext.Provider>
  );
}
