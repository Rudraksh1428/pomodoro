import Timer from "./Timer";
import Tasks from "./Tasks";

const Dashboard = ({
  tasks,
  currentTaskId,
  setCurrentTaskId,
  addTask,
  deleteTask,
  toggleTask,
  settings,
  completedSessions,
  completeWorkSession,
}) => {
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <section
      id="dashboard"
      className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
    >
      <div className="mb-16 grid gap-10 lg:grid-cols-[230px_1fr] lg:gap-14">
        <div className="border-b-2 border-[#ad4058] pb-5 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-8">
          <span className="text-sm font-medium text-[#75676a]">
            00
          </span>

          <h2 className="mt-3 text-4xl font-medium text-[#ad4058]">
            Dashboard
          </h2>

          <p className="mt-5 leading-7 text-[#75676a]">
            Manage your focus sessions and tasks in one place.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-[0_15px_40px_rgba(80,40,50,0.08)]">
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#f8e9ed] p-5">
              <p className="text-sm text-[#75676a]">
                Tasks
              </p>

              <p className="mt-2 text-3xl font-bold text-[#ad4058]">
                {tasks.length}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8e9ed] p-5">
              <p className="text-sm text-[#75676a]">
                Completed
              </p>

              <p className="mt-2 text-3xl font-bold text-[#ad4058]">
                {completedTasks}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8e9ed] p-5">
              <p className="text-sm text-[#75676a]">
                Sessions
              </p>

              <p className="mt-2 text-3xl font-bold text-[#ad4058]">
                {completedSessions}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Timer
        tasks={tasks}
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
        settings={settings}
        completedSessions={completedSessions}
        onWorkSessionComplete={completeWorkSession}
      />

      <Tasks
        tasks={tasks}
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
        addTask={addTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </section>
  );
};

export default Dashboard;