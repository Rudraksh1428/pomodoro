import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Tasks from "./components/Tasks";
import Statistics from "./components/Statistics";
import Progress from "./components/Progress";
import Insights from "./components/Insights";
import Settings from "./components/Settings";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#f7f0ed] bg-[linear-gradient(45deg,transparent_48%,rgba(168,67,87,0.12)_49%,rgba(168,67,87,0.12)_51%,transparent_52%),linear-gradient(-45deg,transparent_48%,rgba(168,67,87,0.12)_49%,rgba(168,67,87,0.12)_51%,transparent_52%)] bg-length-[50px_50px]">
      <Navbar setCurrentPage={setCurrentPage} />

      {currentPage === "dashboard" && (
        <main className="px-6 pt-20 pb-8">
          <Timer />
          <Tasks />
          <Footer />
        </main>
      )}

      {currentPage === "statistics" && (
        <main className="px-6 pt-20 pb-8">
          <Statistics />
          <Progress />
          <Footer />
        </main>
      )}

      {currentPage === "insights" && (
        <main className="px-6 pt-20 pb-8">
          <Insights />
          <Footer />
        </main>
      )}

      {currentPage === "settings" && (
        <main className="px-6 pt-20 pb-8">
          <Settings />
          <Footer />
        </main>
      )}
    </div>
  );
};

export default App;
