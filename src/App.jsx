import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TasksTable from "./components/TasksTable";
import { TaskContext, TaskDeleteIdContext } from "./contexts";
import { initialTasks } from "./data/data";
import TaskReducer from "./reducers/TaskReducer";
import "./style/style.css";

export default function App() {
  const [tasksData, dispatch] = useReducer(TaskReducer, initialTasks);
  const [deleteId, setDeleteId] = useState(null);

  return (
    <TaskContext.Provider value={{ tasksData, dispatch }}>
      <TaskDeleteIdContext.Provider value={{ deleteId, setDeleteId }}>
        <div className="bg-[#191D26] font-[Inter] text-white">
          <Navbar />
          <HeroSection />
          <TasksTable />
          <Footer />
        </div>
        <ToastContainer />
      </TaskDeleteIdContext.Provider>
    </TaskContext.Provider>
  );
}
