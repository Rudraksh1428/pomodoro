import { useState } from "react";
import TaskItem from "./TaskItem";

const Tasks = ({
  tasks,
  currentTaskId,
  setCurrentTaskId,
  addTask,
  deleteTask,
  toggleTask,
}) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = taskName.trim();

    if (!name) {
      return;
    }

    addTask(name);
    setTaskName("");
  };

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pomodoros = tasks.reduce(
    (total, task) => total + task.pomodoros,
    0
  );

  return (
    <section
      id="tasks"
      className="grid gap-10 lg:grid-cols-[230px_1fr] lg:gap-14"
    >
      <div className="border-b-2 border-[#ad4058] pb-5 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-8">
        <span className="text-sm font-medium text-[#75676a]">
          02
        </span>

        <h2 className="mt-3 text-4xl font-medium text-[#ad4058]">
          Tasks
        </h2>

        <p className="mt-5 leading-7 text-[#75676a]">
          Add the subjects or tasks you want to focus on.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-7 shadow-[0_15px_40px_rgba(80,40,50,0.08)] sm:p-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={taskName}
            onChange={(event) =>
              setTaskName(event.target.value)
            }
            placeholder="Enter a new task..."
            className="min-w-0 flex-1 rounded-xl border border-[#dfd1d1] bg-[#faf7f5] px-4 py-3 outline-none focus:border-[#ad4058]"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#ad4058] px-6 py-3 font-bold text-white transition hover:bg-[#92364b]"
          >
            + Add Task
          </button>
        </form>

        <div className="mt-6 space-y-3">
          {tasks.length === 0 ? (
            <div className="rounded-2xl bg-[#faf7f5] px-5 py-10 text-center">
              <p className="text-lg font-semibold text-[#4d4143]">
                No tasks yet
              </p>

              <p className="mt-2 text-sm text-[#75676a]">
                Add your first task to start focusing.
              </p>
            </div>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                isSelected={currentTaskId === task.id}
                onSelect={setCurrentTaskId}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#f8e9ed] p-5">
            <p className="text-sm text-[#75676a]">
              Total Tasks
            </p>
            <p className="mt-2 text-2xl font-bold text-[#ad4058]">
              {tasks.length}
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8e9ed] p-5">
            <p className="text-sm text-[#75676a]">
              Completed
            </p>
            <p className="mt-2 text-2xl font-bold text-[#ad4058]">
              {completed}
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8e9ed] p-5">
            <p className="text-sm text-[#75676a]">
              Pomodoros
            </p>
            <p className="mt-2 text-2xl font-bold text-[#ad4058]">
              {pomodoros}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;