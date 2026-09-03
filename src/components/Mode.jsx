import React from "react";

const Mode = () => {
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <button className="rounded-lg bg-[#a84357] px-6 py-2.5 font-semibold text-amber-50 transition">
        Work
      </button>

      <button className="rounded-lg bg-[#f7f0ed] px-6 py-2.5 font-medium text-[#6f6260] transition hover:bg-[#ead9d5] hover:text-[#a84357]">
        Short Break
      </button>

      <button className="rounded-lg bg-[#f7f0ed] px-6 py-2.5 font-medium text-[#6f6260] transition hover:bg-[#ead9d5] hover:text-[#a84357]">
        Long Break
      </button>
    </div>
  );
};

export default Mode;
