"use client";

import { useEffect, useState } from "react";

import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({ subsets: ["latin"] });

// 🌿 context
import {
  useButtonContext,
  useSlideContext,
  useSlideUpdateContext,
} from "@/context/SelectProvider";

// ✨ assets
import CircleXIcon from "@/components/icons/CircleXIcon.jsx";
import ButtonItem from "@/components/ButtonItem.jsx";
import CopyIcon from "@/components/icons/CopyIcon.jsx";
import CheckIcon from "@/components/icons/CheckIcon.jsx";

// 📃 mocks
import { buttonlist } from "@/mocks/buttonlist.js";

// 🧩 components
import Notification from "@/components/Notification.jsx";

const ShowSnipet = () => {
  const slideContext = useSlideContext();
  const updateSlideContext = useSlideUpdateContext();

  const buttonSelected = useButtonContext();

  const buttonList = buttonlist;

  const showedButton = buttonList.filter((e) => e.name === buttonSelected);

  /**
   * control variables
   */
  const [clipControl, setClipControl] = useState(false);

  const [showControl, setShowControl] = useState(false);

  useEffect(() => {
    setClipControl(false);

    setTimeout(() => {
      buttonSelected ? setShowControl(true) : setShowControl(false);
    }, 50);
  }, [buttonSelected]);

  /**
   * Utilities
   */

  const CopyButton = () => {
    navigator.clipboard.writeText(showedButton[0]?.snippet);
    setClipControl(true);

    setTimeout(() => {
      setClipControl(false);
    }, 1000);
  };

  return (
    <>
      <div className="block">
        {slideContext}
        <div
          className={`bg-gray-100 dark:bg-[#2c3147] block md:flex justify-around md:divide-x md:divide-indigo-500 md:dark:divide-emerald-400 static lg:absolute top-[100%] rounded-md shadow-lg dark:shadow-none lg:shadow-none lg:rounded-none ${
            slideContext ? "lg:-translate-y-full" : "lg:-translate-y-0"
          } lg:duration-500 w-auto lg:w-full h-auto md:h-[300px] lg:h-[40%] z-0 lg:z-10 mx-7 lg:mx-auto`}
        >
          <div className="hidden relative md:flex flex-col w-full justify-center items-center gap-12 text-black dark:text-white">
            <button
              className="absolute top-10 left-10 duration-300"
              onClick={updateSlideContext}
            >
              <span>
                <CircleXIcon className="stroke-indigo-500 dark:stroke-emerald-400 hover:stroke-indigo-400 dark:hover:stroke-emerald-300" />
              </span>
            </button>

            <h2 className="absolute top-10 lg:top-8 left-20 text-1xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-emerald-400 dark:to-sky-700">
              {showedButton[0]?.name || "Button"}
            </h2>

            <ButtonItem button={showedButton[0]} scale="100" />
          </div>

          <div className="relative p-2 md:p-4 lg:p-10 w-full block mx-auto">
            <div
              className={`overflow-y-scroll bg-gray-300 dark:bg-primary rounded-lg h-[230px] lg:h-full px-8 text-xs code ${firaCode.className} font-semibold text-purple-500 dark:text-emerald-500`}
            >
              {showedButton[0]?.snippet || " "}
            </div>

            <button
              className="mt-2 lg:mt-auto flex items-center justify-center space-x-5 lg:block w-full lg:w-auto static lg:absolute lg:right-16 lg:top-14 outline outline-1 outline-secondary dark:outline-[#353a52] py-2 px-2 rounded-md bg-gray-300 dark:bg-primary hover:bg-secondary dark:hover:bg-[#2c3147]"
              onClick={CopyButton}
            >
              {clipControl ? (
                <>
                  <CheckIcon className="stroke-purple-500 dark:stroke-emerald-400" />{" "}
                  <h2 className="text-purple-500 dark:text-emerald-400 text-sm">
                    Copied!
                  </h2>
                </>
              ) : (
                <>
                  <CopyIcon
                    className={`stroke-purple-500 dark:stroke-emerald-400`}
                  />

                  <h2 className="block lg:hidden text-sm font-medium text-purple-500 dark:text-emerald-400">
                    Copy to the clipboard
                  </h2>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <Notification isCopy={clipControl} />
    </>
  );
};

export default ShowSnipet;
