const Insights = ({ sessions, tasks }) => {
  const workSessions = sessions.filter((session) => session.type === "work");

  const totalMinutes = workSessions.reduce(
    (total, session) => total + session.duration,
    0,
  );

  const mostFocusedTask = [...tasks].sort(
    (a, b) => b.pomodoros - a.pomodoros,
  )[0];

  const completedTasks = tasks.filter((task) => task.completed).length;

  const insights = [
    {
      title: "Total Focus",
      value: `${totalMinutes} minutes`,
      description: "Total focused time recorded by your Pomodoro sessions.",
    },
    {
      title: "Best Task",
      value: mostFocusedTask ? mostFocusedTask.name : "No task yet",
      description: "The task with the highest number of completed Pomodoros.",
    },
    {
      title: "Task Completion",
      value:
        tasks.length > 0
          ? `${Math.round((completedTasks / tasks.length) * 100)}%`
          : "0%",
      description: "Percentage of your current tasks that are completed.",
    },
  ];

  return (
    <section
      id="insights"
      className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[230px_1fr] lg:gap-14 lg:px-10"
    >
      <div className="border-b-2 border-[#ad4058] pb-5 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-8">
        <span className="text-sm font-medium text-[#75676a]">05</span>

        <h2 className="mt-3 text-4xl font-medium text-[#ad4058]">Insights</h2>

        <p className="mt-5 leading-7 text-[#75676a]">
          A quick overview of your productivity habits.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {insights.map((insight) => (
          <div
            key={insight.title}
            className="rounded-3xl bg-white p-7 shadow-[0_15px_40px_rgba(80,40,50,0.08)]"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-[#75676a]">
              {insight.title}
            </p>

            <h3 className="mt-4 wrap-break-words text-2xl font-bold text-[#ad4058]">
              {insight.value}
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#75676a]">
              {insight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
