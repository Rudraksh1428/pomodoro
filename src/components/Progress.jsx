import React from "react";

const Progress = () => {
  return (
    <section
      id="progress-section"
      className="mt-9 h-100 border-2 border-[#ded4cf] bg-[#eee6e1]"
    >
      <h2 className="bg-[#a84357] py-3 text-center text-2xl font-bold text-amber-50">
        Weekly Progress
      </h2>

      <div className="px-8 py-6">
        <h3 className="mb-6 text-center text-lg font-bold text-[#a84357]">
          This Week
        </h3>

        <div className="flex h-55 items-end justify-center gap-5">
          <div className="flex h-full flex-col items-center justify-end gap-2">
            <div className="h-20 w-8 rounded-t-md bg-[#d37d8e]"></div>
            <span className="text-sm font-medium text-[#6f6260]">Mon</span>
          </div>

          <div className="flex h-full flex-col items-center justify-end gap-2">
            <div className="h-28 w-8 rounded-t-md bg-[#d37d8e]"></div>
            <span className="text-sm font-medium text-[#6f6260]">Tue</span>
          </div>

          <div className="flex h-full flex-col items-center justify-end gap-2">
            <div className="h-16 w-8 rounded-t-md bg-[#d37d8e]"></div>
            <span className="text-sm font-medium text-[#6f6260]">Wed</span>
          </div>

          <div className="flex h-full flex-col items-center justify-end gap-2">
            <div className="h-32 w-8 rounded-t-md bg-[#a84357]"></div>
            <span className="text-sm font-medium text-[#6f6260]">Thu</span>
          </div>

          <div className="flex h-full flex-col items-center justify-end gap-2">
            <div className="h-24 w-8 rounded-t-md bg-[#d37d8e]"></div>
            <span className="text-sm font-medium text-[#6f6260]">Fri</span>
          </div>

          <div className="flex h-full flex-col items-center justify-end gap-2">
            <div className="h-12 w-8 rounded-t-md bg-[#d37d8e]"></div>
            <span className="text-sm font-medium text-[#6f6260]">Sat</span>
          </div>

          <div className="flex h-full flex-col items-center justify-end gap-2">
            <div className="h-8 w-8 rounded-t-md bg-[#d37d8e]"></div>
            <span className="text-sm font-medium text-[#6f6260]">Sun</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
