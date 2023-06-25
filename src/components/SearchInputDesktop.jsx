"use client";

import { useEffect, useState } from "react";

// 🌿 context
import {
  useSearchContext,
  useSearchUpdateContext,
} from "@/context/SearchProvider";

// ✨ assets
import SearchIcon from "@/components/icons/SearchIcon";

const SearchInputDesktop = () => {
  const currentSearch = useSearchContext();
  const updateCurrentSearch = useSearchUpdateContext();

  const [controlSearch, setControlSearch] = useState(null);

  const updateSearch = (search) => {
    setControlSearch(search);
  };

  useEffect(() => {
    updateCurrentSearch(controlSearch);
  }, [controlSearch]);

  return (
    <div className="hidden lg:flex lg:items-center relative">
      <input
        type="text"
        value={currentSearch}
        placeholder="Search a button"
        className="p-2 bg-transparent hover:ring-2 rounded hover:ring-gray-300 focus:outline-1 focus:outline-gray-300 focus:ring-0 w-[250px] duration-300"
        onChange={(e) =>
          setControlSearch(e.target.value.toLocaleLowerCase().trim())
        }
      />

      <button
        onClick={() => updateSearch(controlSearch)}
        className="bg-transparent absolute right-2"
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchInputDesktop;
