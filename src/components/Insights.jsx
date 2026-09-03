import React from "react";

const Insights = () => {
  return (
    <section
      id="insights-section"
      className="mt-8 flex h-110 flex-col border-2 border-[#ded4cf] bg-[#eee6e1]"
    >
      <h2 className="bg-[#a84357] py-3 text-center text-2xl font-bold text-amber-50">
        Insights
      </h2>

      <div className="flex flex-1 flex-col items-center justify-center p-10 text-center">
        <div className="rounded-2xl border-2 border-[#a84357] bg-[#f4e8ea] px-10 py-8">
          <p className="text-4xl">
            💡
          </p>

          <p className="mt-4 text-base font-medium text-[#6f6260]">
            Complete a few sessions to unlock personalized insights.
          </p>

          <div
            id="insight-confidence"
            className="mt-5 h-2 w-40 rounded-full bg-[#d37d8e]"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Insights;