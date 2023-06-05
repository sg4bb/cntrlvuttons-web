"use client";

import { useEffect, useState } from "react";

// 🌿 context
import {
  useSearchContext,
  useSearchUpdateContext,
} from "@/context/SearchProvider";

// ✨ assets
import SearchIcon from "@/components/icons/SearchIcon";

const SearchInput = () => {
  const currentSearch = useSearchContext();
  const updateCurrentSearch = useSearchUpdateContext();

  const [controlSearch, setControlSearch] = useState("");

  const updateSearch = (search) => {
    setControlSearch(search);
  };

  useEffect(() => {
    updateCurrentSearch(controlSearch);
  }, [controlSearch]);

  return (
    <div className="mb-2 flex items-center gap-2 bg-gray-100 shadow-md dark:bg-[#2c3147] dark:shadow-none rounded-xl p-4 mx-6 lg:hidden">
      <span className="min-w-[20px] hidden md:block">
        <SearchIcon className="stroke-indigo-500 dark:stroke-emerald-400" />
      </span>
      <input
        name="button"
        type="text"
        value={currentSearch}
        onChange={(e) =>
          setControlSearch(e.target.value.toLocaleLowerCase().trim())
        }
        className="flex-1 h-14 p-2 rounded-lg text-dark dark:text-white bg-transparent hover:ring-2 hover:ring-gray-300 focus:ring-0 w-full md:w-[250px] duration-300"
        placeholder="Search a button"
      />

      <button
        onClick={() => updateSearch(controlSearch)}
        className="bg-gradient-to-br from-purple-500 to-blue-500 dark:from-emerald-400 dark:to-sky-700 rounded-lg py-4 px-4 text-white font-bold"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
