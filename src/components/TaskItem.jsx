import React from "react";

const TaskItem = () => {
  return (
    <li className="m-4 mt-4 flex items-center justify-between rounded-lg border-2 border-[#8f3749] bg-[#f4e8ea] p-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="h-5 w-5 accent-[#a84357]"
        />

        <span className="font-medium text-[#a84357]">
          Study
        </span>
      </div>

      <button className="rounded-lg bg-[#a84357] px-4 py-2 font-medium text-amber-50 transition hover:bg-[#8f3749] active:scale-95">
        Delete
      </button>
    </li>
  );
};

export default TaskItem;