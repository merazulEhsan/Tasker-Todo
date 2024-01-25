import { useReducer } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TasksTable from "./components/TasksTable";
import { TaskContext } from "./contexts";
import { initialTasks } from "./data/data";
import TaskReducer from "./reducers/TaskReducer";
import "./style/style.css";

export default function App() {
  const [tasksData, dispatch] = useReducer(TaskReducer, initialTasks);

  return (
    <TaskContext.Provider value={{ tasksData, dispatch }}>
      <div className="bg-[#191D26] font-[Inter] text-white">
        <Navbar />
        <HeroSection />
        <TasksTable />
        <Footer />
      </div>
    </TaskContext.Provider>
  );
}
