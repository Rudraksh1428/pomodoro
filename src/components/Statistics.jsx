const Statistics = ({ sessions, tasks }) => {
  const workSessions = sessions.filter(
    (session) => session.type === "work"
  );

  const totalMinutes = workSessions.reduce(
    (total, session) => total + session.duration,
    0
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const averageSession =
    workSessions.length > 0
      ? Math.round(totalMinutes / workSessions.length)
      : 0;

  const stats = [
    {
      label: "Focus Time",
      value: `${totalMinutes}m`,
    },
    {
      label: "Sessions",
      value: workSessions.length,
    },
    {
      label: "Completed Tasks",
      value: completedTasks,
    },
    {
      label: "Average Session",
      value: `${averageSession}m`,
    },
  ];

  return (
    <section
      id="statistics"
      className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[230px_1fr] lg:gap-14 lg:px-10"
    >
      <div className="border-b-2 border-[#ad4058] pb-5 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-8">
        <span className="text-sm font-medium text-[#75676a]">
          03
        </span>

        <h2 className="mt-3 text-4xl font-medium text-[#ad4058]">
          Statistics
        </h2>

        <p className="mt-5 leading-7 text-[#75676a]">
          See how much focused work you have completed.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl bg-white p-7 shadow-[0_15px_40px_rgba(80,40,50,0.08)]"
          >
            <p className="text-sm font-medium text-[#75676a]">
              {stat.label}
            </p>

            <p className="mt-3 text-4xl font-extrabold text-[#ad4058]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;