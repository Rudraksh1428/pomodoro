const Progress = ({ sessions }) => {
  const today = new Date();

  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);

    date.setDate(today.getDate() - (6 - index));

    return date;
  });

  const getDayKey = (date) => {
    return date.toISOString().split("T")[0];
  };

  const data = days.map((date) => {
    const key = getDayKey(date);

    const minutes = sessions
      .filter((session) => {
        if (session.type !== "work") {
          return false;
        }

        return (
          getDayKey(new Date(session.completedAt)) === key
        );
      })
      .reduce(
        (total, session) => total + session.duration,
        0
      );

    return {
      day: date.toLocaleDateString("en-US", {
        weekday: "short",
      }),
      minutes,
    };
  });

  const maxMinutes = Math.max(
    ...data.map((item) => item.minutes),
    25
  );

  return (
    <section
      id="progress"
      className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[230px_1fr] lg:gap-14 lg:px-10"
    >
      <div className="border-b-2 border-[#ad4058] pb-5 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-8">
        <span className="text-sm font-medium text-[#75676a]">
          04
        </span>

        <h2 className="mt-3 text-4xl font-medium text-[#ad4058]">
          Progress
        </h2>

        <p className="mt-5 leading-7 text-[#75676a]">
          Your focus time over the last seven days.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-7 shadow-[0_15px_40px_rgba(80,40,50,0.08)] sm:p-10">
        <div className="space-y-5">
          {data.map((item) => {
            const width =
              item.minutes === 0
                ? 0
                : Math.max(
                    (item.minutes / maxMinutes) * 100,
                    4
                  );

            return (
              <div
                key={item.day}
                className="grid grid-cols-[45px_1fr_55px] items-center gap-4"
              >
                <span className="font-bold text-[#4d4143]">
                  {item.day}
                </span>

                <div className="h-4 overflow-hidden rounded-full bg-[#eee4e1]">
                  <div
                    className="h-full rounded-full bg-[#ad4058] transition-all duration-500"
                    style={{ width: `${width}%` }}
                  />
                </div>

                <span className="text-right text-sm font-semibold text-[#75676a]">
                  {item.minutes}m
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Progress;