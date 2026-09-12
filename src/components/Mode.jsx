const Mode = ({ mode, setMode, disabled }) => {
  const modes = [
    ["work", "Work"],
    ["shortBreak", "Short Break"],
    ["longBreak", "Long Break"],
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {modes.map(([value, label]) => (
        <button
          key={value}
          type="button"
          disabled={disabled}
          onClick={() => setMode(value)}
          className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
            mode === value
              ? "bg-[#ad4058] text-white shadow-md"
              : "bg-[#f5dce2] text-[#96384f] hover:bg-[#edc7d0]"
          } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Mode;