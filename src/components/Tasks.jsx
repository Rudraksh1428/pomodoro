import React from "react";
import TaskItem from "./TaskItem";

const Tasks = () => {
  return (
    <section
      id="tasks-section"
      className="mt-10 flex h-130 flex-col border-2 border-[#ded4cf] bg-[#eee6e1]"
    >
      <h2 className="bg-[#a84357] py-3 text-center text-2xl font-bold text-amber-50">
        Tasks
      </h2>

      <form id="add-task-form" className="flex items-center px-5">
        <input
          className="mt-5 flex-1 rounded-lg border-2 border-[#a84357] bg-[#f4e8ea] py-2 pl-4 text-[#a84357] outline-none focus:border-[#8f3749]"
          type="text"
          id="task-input"
          placeholder="Add a new task..."
        />

        <button
          className="mt-5 ml-4 rounded-lg border-2 border-white bg-[#a84357] px-4 py-2 text-xl font-bold text-amber-50 transition hover:bg-[#d37d8e] active:scale-95"
          type="submit"
          id="add-task-btn"
        >
          +
        </button>
      </form>

      <ul id="task-list">
        <TaskItem />
      </ul>

      <div className="mt-auto mb-5 flex justify-center">
        <div className="inline rounded-lg border border-[#a84357] bg-[#f4e8ea] px-4 py-3">
          <span className="font-medium text-[#6f6260]">
            Completed tasks:
          </span>

          <span className="ml-2 font-bold text-[#a84357]">
            0
          </span>
        </div>
      </div>
    </section>
  );
};

export default Tasks;