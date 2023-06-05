"use client";

import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

// 🌿 context
import {
  useButtonContext,
  useButtonClearContext,
} from "@/context/SelectProvider";

// ✨ assets
import CloseIcon from "@/components/icons/CloseIcon";
import CircleXIcon from "./icons/CircleXIcon";
import ButtonItem from "./ButtonItem";
import KCapLogo from "./icons/KCapLogo";

// 📃 mocks
import { buttonlist } from "@/mocks/buttonlist.js";

const ShowSnipet = () => {
  const buttonSelected = useButtonContext();
  const buttonClear = useButtonClearContext();

  const buttonList = buttonlist;

  const showedButton = buttonList.filter((e) => e.name === buttonSelected);

  return (
    <>
      <div className={`${buttonSelected ? "block" : "block lg:hidden"}`}>
        <div className="bg-gray-50 dark:bg-[#2c3147] block md:flex justify-around md:divide-x md:divide-indigo-500 md:dark:divide-emerald-400 static lg:absolute rounded-md shadow-lg dark:shadow-none lg:shadow-none lg:rounded-none top-[60%] w-auto lg:w-full h-auto md:h-[300px] lg:h-[40%] z-0 lg:z-10 mx-7 lg:mx-auto">
          <div className="hidden relative md:flex flex-col w-full justify-center items-center gap-12 text-black dark:text-white">
            <button
              className="absolute top-10 left-10 hover:scale-125 duration-300"
              onClick={buttonClear}
            >
              <span>
                <CircleXIcon className="stroke-indigo-500 dark:stroke-emerald-400 hover:stroke-indigo-400 dark:hover:stroke-emerald-300" />
              </span>
            </button>

            <h2 className="absolute top-10 lg:top-8 left-20 text-1xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-emerald-400 dark:to-sky-700">
              {showedButton[0]?.name}
            </h2>

            <ButtonItem button={showedButton[0]} scale="100" />
          </div>

          <div className="p-2 md:p-4 lg:p-10 w-full block mx-auto">
            <div
              className={`overflow-y-scroll bg-gray-300 dark:bg-primary rounded-lg h-[200px] md:h-full px-8 text-xs code ${sourceCodePro.className} text-purple-500 font-semibold dark:text-emerald-400`}
            >
              {showedButton[0]?.snippet}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowSnipet;
