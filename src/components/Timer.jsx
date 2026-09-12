import { useEffect, useRef, useState } from "react";
import Mode from "./Mode";
import Timercontrol from "./Timercontrol";
import Sessioncount from "./Sessioncount";

const Timer = ({
  tasks,
  currentTaskId,
  setCurrentTaskId,
  settings,
  completedSessions,
  onWorkSessionComplete,
}) => {
  const [mode, setMode] = useState("work");
  const [isRunning, setIsRunning] = useState(false);

  const getDuration = (currentMode) => {
    if (currentMode === "work") {
      return settings.workDuration;
    }

    if (currentMode === "shortBreak") {
      return settings.shortBreakDuration;
    }

    return settings.longBreakDuration;
  };

  const [timeLeft, setTimeLeft] = useState(
    settings.workDuration * 60
  );

  const transitionLock = useRef(false);

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(getDuration(mode) * 60);
    }
  }, [
    settings.workDuration,
    settings.shortBreakDuration,
    settings.longBreakDuration,
    mode,
    isRunning,
  ]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const playSound = () => {
    if (!settings.soundEnabled) {
      return;
    }

    try {
      const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

      if (!AudioContext) {
        return;
      }

      const audioContext = new AudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.type = "sine";
      oscillator.frequency.value = 800;

      gainNode.gain.setValueAtTime(
        0.2,
        audioContext.currentTime
      );

      gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.8
      );

      oscillator.start();
      oscillator.stop(
        audioContext.currentTime + 0.8
      );
    } catch {
      return;
    }
  };

  useEffect(() => {
    if (!isRunning || timeLeft !== 0) {
      return;
    }

    if (transitionLock.current) {
      return;
    }

    transitionLock.current = true;

    playSound();

    if (mode === "work") {
      const nextCompletedSessions =
        completedSessions + 1;

      onWorkSessionComplete(
        currentTaskId,
        settings.workDuration
      );

      setIsRunning(false);

      if (nextCompletedSessions % 4 === 0) {
        setMode("longBreak");
        setTimeLeft(
          settings.longBreakDuration * 60
        );
      } else {
        setMode("shortBreak");
        setTimeLeft(
          settings.shortBreakDuration * 60
        );
      }

      setIsRunning(true);
    } else {
      setMode("work");
      setTimeLeft(
        settings.workDuration * 60
      );
    }

    transitionLock.current = false;
  }, [
    timeLeft,
    isRunning,
    mode,
    completedSessions,
    currentTaskId,
    settings,
    onWorkSessionComplete,
  ]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(getDuration(mode) * 60);
  };

  const changeMode = (newMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(getDuration(newMode) * 60);
  };

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (timeLeft % 60)
    .toString()
    .padStart(2, "0");

  const currentTask = tasks.find(
    (task) => task.id === currentTaskId
  );

  const modeTitle =
    mode === "work"
      ? "Work Session"
      : mode === "shortBreak"
      ? "Short Break"
      : "Long Break";

  return (
    <section
      id="timer"
      className="mb-20 grid gap-10 lg:grid-cols-[230px_1fr] lg:gap-14"
    >
      <div className="border-b-2 border-[#ad4058] pb-5 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-8">
        <span className="text-sm font-medium text-[#75676a]">
          01
        </span>

        <h2 className="mt-3 text-4xl font-medium text-[#ad4058]">
          Focus Timer
        </h2>

        <p className="mt-5 leading-7 text-[#75676a]">
          Stay focused using the Pomodoro technique.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-7 shadow-[0_15px_40px_rgba(80,40,50,0.08)] sm:p-10">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <label
            htmlFor="currentTask"
            className="font-semibold text-[#4d4143]"
          >
            Current subject / task
          </label>

          <select
            id="currentTask"
            value={currentTaskId}
            onChange={(event) =>
              setCurrentTaskId(event.target.value)
            }
            className="rounded-xl border border-[#dfd1d1] bg-[#faf7f5] px-4 py-3 outline-none focus:border-[#ad4058]"
          >
            <option value="">
              Select a task
            </option>

            {tasks.map((task) => (
              <option
                key={task.id}
                value={task.id}
              >
                {task.name}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#75676a]">
            {modeTitle}
          </p>

          <div className="my-8 text-7xl font-extrabold tracking-wider text-[#ad4058] sm:text-8xl">
            {minutes}:{seconds}
          </div>

          <p className="mb-7 text-[#75676a]">
            {currentTask
              ? `Working on: ${currentTask.name}`
              : "Select a task to start focusing"}
          </p>

          <Mode
            mode={mode}
            setMode={changeMode}
            disabled={isRunning}
          />

          <div className="mt-8">
            <Timercontrol
              isRunning={isRunning}
              onStart={startTimer}
              onPause={pauseTimer}
              onReset={resetTimer}
            />
          </div>

          <Sessioncount
            completedSessions={completedSessions}
          />
        </div>
      </div>
    </section>
  );
};

export default Timer;