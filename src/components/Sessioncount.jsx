import React from "react";

const Sessioncount = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <div className="rounded-xl bg-[#a84357] px-6 py-3 text-sm font-medium text-amber-50">
        <span>Sessions completed today : </span>

        <span className="font-bold">0</span>
      </div>

      <div className="mt-3 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-[#a84357]"></span>
        <span className="h-3 w-3 rounded-full bg-[#d37d8e]"></span>
        <span className="h-3 w-3 rounded-full bg-[#d37d8e]"></span>
        <span className="h-3 w-3 rounded-full bg-[#d37d8e]"></span>
      </div>
    </div>
  );
};

export default Sessioncount;