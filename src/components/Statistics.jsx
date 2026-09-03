import React from "react";

const Statistics = () => {
  return (
    <section
      id="stats-section"
      className="mt-8 h-100 border-2 border-[#ded4cf] bg-[#eee6e1]"
    >
      <h2 className="bg-[#a84357] py-3 text-center text-2xl font-bold text-amber-50">
        Statistics
      </h2>

      <div className="mt-30 flex items-center justify-center gap-4 p-5">
        <div className="w-60 rounded-lg border-2 border-[#a84357] bg-[#f4e8ea] p-5 text-center">
          <p className="text-3xl font-bold text-[#a84357]">
            0h 0m
          </p>

          <p className="mt-2 text-sm font-medium text-[#6f6260]">
            Total Focus Time
          </p>
        </div>

        <div className="w-60 rounded-lg border-2 border-[#a84357] bg-[#f4e8ea] p-5 text-center">
          <p className="text-3xl font-bold text-[#a84357]">
            0
          </p>

          <p className="mt-2 text-sm font-medium text-[#6f6260]">
            Sessions Completed
          </p>
        </div>

        <div className="w-60 rounded-lg border-2 border-[#a84357] bg-[#f4e8ea] p-5 text-center">
          <p className="text-3xl font-bold text-[#a84357]">
            0m
          </p>

          <p className="mt-2 text-sm font-medium text-[#6f6260]">
            Avg. Session Length
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;