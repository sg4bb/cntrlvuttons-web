"use client";

import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

import {
  useButtonContext,
  useButtonClearContext,
} from "@/context/SelectProvider";

// ❤ assets
import CloseIcon from "@/components/icons/CloseIcon";
import CircleXIcon from "./icons/CircleXIcon";
import ButtonItem from "./ButtonItem";

const ShowSnipet = () => {
  const buttonSelected = useButtonContext();
  const buttonClear = useButtonClearContext();

  const buttonTest = {
    name: "Jelly",
    class: "btnJelly",
  };

  return (
    <div className={`${buttonSelected ? "block" : "hidden"}`}>
      <div className="flex justify-around divide-x divide-indigo-500 dark:divide-emerald-400 absolute top-[60%] w-full h-[40%] z-10 bg-gray-50 dark:bg-[#2c3147]">
        <div className="relative flex flex-col w-full justify-center items-center left-0 right-0 mx-auto gap-12 text-black dark:text-white">
          <button className="absolute top-10 left-10" onClick={buttonClear}>
            <span>
              <CircleXIcon className="stroke-indigo-500 dark:stroke-emerald-400" />
            </span>
          </button>
          <h2 className="absolute top-8 left-20 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-emerald-400 dark:to-sky-700">
            {buttonTest.name} - button snippet
          </h2>
          <ButtonItem button={buttonTest} scale="100" />
        </div>

        <div className="container p-6 w-full">
          <div
            className={`bg-gray-300 dark:bg-primary rounded-lg h-full p-6 ${sourceCodePro.className} text-purple-500 font-semibold dark:text-emerald-400`}
          >
            example text
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSnipet;
