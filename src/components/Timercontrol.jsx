const Timercontrol = ({
  isRunning,
  onStart,
  onPause,
  onReset,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {!isRunning ? (
        <button
          type="button"
          onClick={onStart}
          className="rounded-xl bg-[#ad4058] px-8 py-3 font-bold text-white shadow-md transition hover:bg-[#92364b]"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
      ) : (
        <button
          type="button"
          onClick={onPause}
          className="rounded-xl bg-[#ad4058] px-8 py-3 font-bold text-white shadow-md transition hover:bg-[#92364b]"
        >
          Pause
        </button>
      )}

      <button
        type="button"
        onClick={onReset}
        className="rounded-xl bg-[#eee5e2] px-8 py-3 font-bold text-[#4d4143] transition hover:bg-[#dfd3d0]"
      >
        Reset
      </button>
    </div>
  );
};

export default Timercontrol;