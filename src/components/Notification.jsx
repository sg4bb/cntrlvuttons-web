"use client";

// ✨ assets
import CheckIcon from "@/components/icons/CheckIcon.jsx";

const Notification = ({ isCopy }) => {
  return (
    <div
      className={`hidden lg:flex absolute top-[100%] left-1/2 -translate-x-1/2 ${
        isCopy ? "-translate-y-36 lg:-translate-y-28" : "-translate-y-0"
      } duration-500 z-50 flex items-center justify-center space-x-2 bg-gradient-to-br from-purple-500 to-blue-500 dark:from-emerald-400 dark:to-sky-700 max-w-[180px] p-2 rounded-md`}
    >
      <CheckIcon className="stroke-white" />{" "}
      <h2 className="text-white text-sm">Copied to clipboard</h2>
    </div>
  );
};

export default Notification;
