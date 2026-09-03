import React from "react";

const Settings = () => {
  return (
    <section
      id="settings-section"
      className="mt-8 border-2 border-[#ded4cf] bg-[#eee6e1]"
    >
      <h2 className="bg-[#a84357] py-3 text-center text-2xl font-bold text-amber-50">
        Settings
      </h2>

      <form id="settings-form" className="flex flex-col gap-6 p-8">
        <div className="flex items-center justify-between border-b border-[#ded4cf] pb-4">
          <label htmlFor="work-duration" className="font-medium text-[#6f6260]">
            Work duration (minutes)
          </label>

          <input
            type="number"
            id="work-duration"
            defaultValue="25"
            className="w-24 rounded-lg border-2 border-[#a84357] bg-[#f4e8ea] px-3 py-2 text-center text-[#a84357] outline-none focus:border-[#8f3749]"
          />
        </div>

        <div className="flex items-center justify-between border-b border-[#ded4cf] pb-4">
          <label
            htmlFor="short-break-duration"
            className="font-medium text-[#6f6260]"
          >
            Short break (minutes)
          </label>

          <input
            type="number"
            id="short-break-duration"
            defaultValue="5"
            className="w-24 rounded-lg border-2 border-[#a84357] bg-[#f4e8ea] px-3 py-2 text-center text-[#a84357] outline-none focus:border-[#8f3749]"
          />
        </div>

        <div className="flex items-center justify-between border-b border-[#ded4cf] pb-4">
          <label
            htmlFor="long-break-duration"
            className="font-medium text-[#6f6260]"
          >
            Long break (minutes)
          </label>

          <input
            type="number"
            id="long-break-duration"
            defaultValue="15"
            className="w-24 rounded-lg border-2 border-[#a84357] bg-[#f4e8ea] px-3 py-2 text-center text-[#a84357] outline-none focus:border-[#8f3749]"
          />
        </div>

        <div className="flex items-center justify-between border-b border-[#ded4cf] pb-4">
          <label htmlFor="sound-toggle" className="font-medium text-[#6f6260]">
            Sound notifications
          </label>

          <input
            type="checkbox"
            id="sound-toggle"
            defaultChecked
            className="h-5 w-5 accent-[#a84357]"
          />
        </div>

        <button
          type="submit"
          id="save-settings-btn"
          className="mx-auto mt-2 rounded-lg bg-[#a84357] px-8 py-3 font-semibold text-amber-50 transition hover:bg-[#8f3749] active:scale-95"
        >
          Save Settings
        </button>
      </form>
    </section>
  );
};

export default Settings;
