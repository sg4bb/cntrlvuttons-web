"use client";

// 🧩 components
import ButtonItem from "@/components/ButtonItem";

// 📃 mocks
import { buttonlist } from "@/mocks/buttonlist.js";

// 🌿 context
import { useSearchContext } from "@/context/SearchProvider";
import { useButtonContext, useSlideContext } from "@/context/SelectProvider";

const ButtonList = () => {
  const slideContext = useSlideContext();

  const selectButton = useButtonContext();

  const currentSearch = useSearchContext();

  const buttonList = buttonlist.filter((button) =>
    button.name.toLowerCase().includes(currentSearch)
  );

  return (
    <>
      <h2 className="text-center text-1xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-500 dark:from-emerald-400 dark:to-sky-700">
        {buttonList.length > 0 ? "Tap a button!" : "Oops! Button not found"}
      </h2>
      <section
        className={`h-[20vh] md:h-[22vh] ${
          slideContext ? "lg:h-[30vh] duration-500" : "lg:h-[70vh] duration-500"
        } overflow-y-scroll overflow-x-hidden mx-2 md:mx-7 lg:mx-14 xl:mx-27 2xl:mx-56 px-12 md:px-8 lg:px-auto xl:px-auto 2xl:px-12`}
      >
        <div
          className={`grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 md:gap-28`}
        >
          {buttonList.map((button, index) => (
            <ButtonItem button={button} key={index} scale="100" />
          ))}
        </div>
      </section>
    </>
  );
};

export default ButtonList;
