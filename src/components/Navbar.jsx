import React from "react";

const Navbar = ({ setCurrentPage }) => {
  const goToDashboard = () => {
    setCurrentPage("dashboard");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  const goToTasks = () => {
    setCurrentPage("dashboard");

    setTimeout(() => {
      document.getElementById("tasks-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const goToPage = (page) => {
    setCurrentPage(page);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-[#ded4cf] bg-[#a84357] px-10 py-2">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-wide text-amber-50">
          POMODORO
        </h1>

        <span className="text-sm font-bold tracking-wide text-amber-50">
          Focus Tracker
        </span>
      </div>

      <nav>
        <div className="flex items-center gap-8 pr-10 text-sm font-medium text-amber-50">
          <button
            onClick={goToDashboard}
            className="rounded-lg bg-[#d37d8e] p-1.75 transition hover:text-[#ffd0d9]"
          >
            Dashboard
          </button>

          <button
            onClick={goToTasks}
            className="rounded-lg bg-[#d37d8e] p-1.75 transition hover:text-[#ffd0d9]"
          >
            Tasks
          </button>

          <button
            onClick={() => goToPage("statistics")}
            className="rounded-lg bg-[#d37d8e] p-1.75 transition hover:text-[#ffd0d9]"
          >
            Statistics
          </button>

          <button
            onClick={() => goToPage("insights")}
            className="rounded-lg bg-[#d37d8e] p-1.75 transition hover:text-[#ffd0d9]"
          >
            Insights
          </button>

          <button
            onClick={() => goToPage("settings")}
            className="rounded-lg bg-[#d37d8e] p-1.75 transition hover:text-[#ffd0d9]"
          >
            Settings
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;