import { useEffect, useState } from "react";

const defaultSettings = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  soundEnabled: true,
};

const Settings = ({ settings, onSave }) => {
  const [form, setForm] = useState(settings);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setForm(settings);
  }, [settings]);

  const handleChange = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newSettings = {
      workDuration: Math.max(
        1,
        Number(form.workDuration) || 25
      ),
      shortBreakDuration: Math.max(
        1,
        Number(form.shortBreakDuration) || 5
      ),
      longBreakDuration: Math.max(
        1,
        Number(form.longBreakDuration) || 15
      ),
      soundEnabled: form.soundEnabled,
    };

    onSave(newSettings);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const resetSettings = () => {
    setForm(defaultSettings);
    onSave(defaultSettings);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <section
      id="settings"
      className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[230px_1fr] lg:gap-14 lg:px-10"
    >
      <div className="border-b-2 border-[#ad4058] pb-5 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-8">
        <span className="text-sm font-medium text-[#75676a]">
          06
        </span>

        <h2 className="mt-3 text-4xl font-medium text-[#ad4058]">
          Settings
        </h2>

        <p className="mt-5 leading-7 text-[#75676a]">
          Customize your Pomodoro timer and notification preferences.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl bg-white p-7 shadow-[0_15px_40px_rgba(80,40,50,0.08)] sm:p-10"
      >
        <div>
          <h3 className="text-2xl font-bold text-[#403638]">
            Timer Settings
          </h3>

          <p className="mt-2 text-sm text-[#75676a]">
            Set the duration of your work sessions and breaks.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-[#faf7f5] p-5">
            <label
              htmlFor="workDuration"
              className="font-bold text-[#403638]"
            >
              Work Duration
            </label>

            <div className="mt-3 flex items-center gap-3">
              <input
                id="workDuration"
                type="number"
                min="1"
                max="120"
                value={form.workDuration}
                onChange={(event) =>
                  handleChange(
                    "workDuration",
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-[#dfd1d1] bg-white px-4 py-3 text-lg outline-none focus:border-[#ad4058] focus:ring-2 focus:ring-[#f3d5dc]"
              />

              <span className="text-sm text-[#75676a]">
                min
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-[#faf7f5] p-5">
            <label
              htmlFor="shortBreakDuration"
              className="font-bold text-[#403638]"
            >
              Short Break
            </label>

            <div className="mt-3 flex items-center gap-3">
              <input
                id="shortBreakDuration"
                type="number"
                min="1"
                max="60"
                value={form.shortBreakDuration}
                onChange={(event) =>
                  handleChange(
                    "shortBreakDuration",
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-[#dfd1d1] bg-white px-4 py-3 text-lg outline-none focus:border-[#ad4058] focus:ring-2 focus:ring-[#f3d5dc]"
              />

              <span className="text-sm text-[#75676a]">
                min
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-[#faf7f5] p-5">
            <label
              htmlFor="longBreakDuration"
              className="font-bold text-[#403638]"
            >
              Long Break
            </label>

            <div className="mt-3 flex items-center gap-3">
              <input
                id="longBreakDuration"
                type="number"
                min="1"
                max="120"
                value={form.longBreakDuration}
                onChange={(event) =>
                  handleChange(
                    "longBreakDuration",
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-[#dfd1d1] bg-white px-4 py-3 text-lg outline-none focus:border-[#ad4058] focus:ring-2 focus:ring-[#f3d5dc]"
              />

              <span className="text-sm text-[#75676a]">
                min
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#eee4e1] pt-8">
          <h3 className="text-2xl font-bold text-[#403638]">
            Notification Settings
          </h3>

          <div className="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-[#faf7f5] p-5">
            <div>
              <p className="font-bold text-[#403638]">
                Sound Notification
              </p>

              <p className="mt-1 text-sm text-[#75676a]">
                Play a sound when a work session or break ends.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                handleChange(
                  "soundEnabled",
                  !form.soundEnabled
                )
              }
              className={`relative h-7 w-14 shrink-0 rounded-full transition ${
                form.soundEnabled
                  ? "bg-[#ad4058]"
                  : "bg-[#d6ccca]"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                  form.soundEnabled
                    ? "left-8"
                    : "left-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="rounded-xl bg-[#ad4058] px-7 py-3 font-bold text-white transition hover:bg-[#92364b]"
          >
            Save Settings
          </button>

          <button
            type="button"
            onClick={resetSettings}
            className="rounded-xl bg-[#eee5e2] px-7 py-3 font-bold text-[#4d4143] transition hover:bg-[#dfd3d0]"
          >
            Reset Defaults
          </button>

          {saved && (
            <span className="font-semibold text-[#4b8060]">
              Settings saved ✓
            </span>
          )}
        </div>
      </form>
    </section>
  );
};

export default Settings;