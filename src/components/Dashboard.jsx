import React from "react";
import Timer from "./Timer";
import Tasks from "./Tasks";
import Statistics from "./Statistics";
import Progress from "./Progress";
import Insights from "./Insights";
import Settings from "./Settings";
const Dashboard = () => {
  return (
    <main className="dash-board">
      <div className="dashboard-grid">
        <Timer />
        <Tasks />
        <Statistics />
        <Progress />
        <Insights />
        <Settings />
      </div>
    </main>
  );
};

export default Dashboard;
