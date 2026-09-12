const Navbar = () => {
  const links = [
    ["Dashboard", "dashboard"],
    ["Tasks", "tasks"],
    ["Statistics", "statistics"],
    ["Progress", "progress"],
    ["Insights", "insights"],
    ["Settings", "settings"],
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#8f3048] bg-[#ad4058] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <div className="shrink-0">
          <h1 className="text-2xl font-extrabold tracking-wide sm:text-3xl">
            POMODORO
          </h1>
          <p className="mt-1 text-sm font-medium text-[#f9dce3]">
            Focus Tracker
          </p>
        </div>

        <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
          {links.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="shrink-0 rounded-xl bg-[#d77f94] px-4 py-2.5 text-sm font-bold transition hover:bg-white hover:text-[#ad4058]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;