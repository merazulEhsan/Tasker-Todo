import { useState } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TasksTable from "./components/TasksTable";
import { TaskContext } from "./contexts";
import { getTaskData } from "./data/data";
import "./style/style.css";

export default function App() {
  const [tasksData, setTasksData] = useState(getTaskData());

  return (
    <TaskContext.Provider value={{ tasksData, setTasksData }}>
      <div className="bg-[#191D26] font-[Inter] text-white">
        <Navbar />
        <HeroSection />
        <TasksTable />
        <Footer />
      </div>
    </TaskContext.Provider>
  );
}
