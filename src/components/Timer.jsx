import React from "react";
import Mode from "./Mode";
import Timercontrol from "./Timercontrol";
import Sessioncount from "./Sessioncount";

const Timer = () => {
  return (
    <section
      id="timer-section"
      className="border border-[#ded4cf] bg-[#eee6e1] p-8 shadow-sm mt-8"
    >
      <h2 className="text-2xl font-bold text-[#a84357]">Focus Time</h2>

      <div className="flex items-center justify-center py-8">
        <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full border-10 border-[#a84357] bg-[#fffaf7]">
          <p className="text-5xl font-bold text-[#a84357]  text-shadow-[2px_2px_2px_gray]">
            25:00
          </p>

          <span className="mt-2 text-sm font-medium text-[#6f6260]">
            work session
          </span>
        </div>
      </div>

      <Mode />
      <Timercontrol />
      <Sessioncount />
    </section>
  );
};

export default Timer;
