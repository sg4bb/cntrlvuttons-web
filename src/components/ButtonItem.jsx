"use client";

import "@/styles/buttons.css";
import { useButtonUpdateContext } from "@/context/SelectProvider";

const ButtonItem = ({ button, scale }) => {
  const updateButton = useButtonUpdateContext();

  return (
    <button
      className={`text-white px-[30px] py-[20px] border-none outline-none ${button.class} scale-${scale}`}
      onClick={() => updateButton(button.name)}
    >
      {button.name}
    </button>
  );
};

export default ButtonItem;
