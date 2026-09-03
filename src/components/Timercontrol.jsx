import React from "react";

const Timercontrol = () => {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <button className="rounded-lg bg-[#a84357] px-8 py-3 font-semibold text-amber-50 transition hover:bg-[#8f3749] active:scale-95">
        Start
      </button>

      <button
        disabled
        className="cursor-not-allowed rounded-lg bg-[#d37d8e] px-8 py-3 font-semibold text-amber-50 opacity-50"
      >
        Pause
      </button>

      <button
        disabled
        className="cursor-not-allowed rounded-lg bg-[#d37d8e] px-8 py-3 font-semibold text-amber-50 opacity-50"
      >
        Reset
      </button>
    </div>
  );
};

export default Timercontrol;
