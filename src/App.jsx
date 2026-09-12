import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Statistics from "./components/Statistics";
import Progress from "./components/Progress";
import Insights from "./components/Insights";
import Settings from "./components/Settings";
import Footer from "./components/Footer";

const defaultSettings = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  soundEnabled: true,
};

const getStoredData = (key, fallback) => {
  try {
    const savedData = localStorage.getItem(key);

    return savedData ? JSON.parse(savedData) : fallback;
  } catch {
    return fallback;
  }
};

const App = () => {
  const [tasks, setTasks] = useState(() =>
    getStoredData("pomodoro_tasks", [])
  );

  const [sessions, setSessions] = useState(() =>
    getStoredData("pomodoro_sessions", [])
  );

  const [currentTaskId, setCurrentTaskId] = useState(
    () => localStorage.getItem("pomodoro_current_task") || ""
  );

  const [settings, setSettings] = useState(() =>
    getStoredData("pomodoro_settings", defaultSettings)
  );

  useEffect(() => {
    localStorage.setItem("pomodoro_tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem(
      "pomodoro_sessions",
      JSON.stringify(sessions)
    );
  }, [sessions]);

  useEffect(() => {
    if (currentTaskId) {
      localStorage.setItem(
        "pomodoro_current_task",
        currentTaskId
      );
    } else {
      localStorage.removeItem("pomodoro_current_task");
    }
  }, [currentTaskId]);

  useEffect(() => {
    localStorage.setItem(
      "pomodoro_settings",
      JSON.stringify(settings)
    );
  }, [settings]);

  const addTask = (name) => {
    const newTask = {
      id: Date.now().toString(),
      name,
      completed: false,
      pomodoros: 0,
    };

    setTasks((previous) => [...previous, newTask]);

    if (!currentTaskId) {
      setCurrentTaskId(newTask.id);
    }
  };

  const deleteTask = (id) => {
    setTasks((previous) =>
      previous.filter((task) => task.id !== id)
    );

    if (currentTaskId === id) {
      setCurrentTaskId("");
    }
  };

  const toggleTask = (id) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const completeWorkSession = (taskId, duration) => {
    const newSession = {
      id: Date.now().toString(),
      taskId,
      duration,
      type: "work",
      completedAt: new Date().toISOString(),
    };

    setSessions((previous) => [
      ...previous,
      newSession,
    ]);

    if (taskId) {
      setTasks((previous) =>
        previous.map((task) =>
          task.id === taskId
            ? {
                ...task,
                pomodoros: task.pomodoros + 1,
              }
            : task
        )
      );
    }
  };

  const completedSessions = sessions.filter(
    (session) => session.type === "work"
  ).length;

  return (
    <div className="min-h-screen bg-[#f8f4f1] text-[#33272a]">
      <Navbar />

      <main>
        <Dashboard
          tasks={tasks}
          currentTaskId={currentTaskId}
          setCurrentTaskId={setCurrentTaskId}
          addTask={addTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          settings={settings}
          completedSessions={completedSessions}
          completeWorkSession={completeWorkSession}
        />

        <Statistics
          sessions={sessions}
          tasks={tasks}
        />

        <Progress sessions={sessions} />

        <Insights
          sessions={sessions}
          tasks={tasks}
        />

        <Settings
          settings={settings}
          onSave={setSettings}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;