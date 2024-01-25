import { useState } from "react";
import { getTaskData } from "../data/data";
import AddModal from "./AddModal";
import SearchBar from "./SearchBar";
import TasksList from "./TasksList";

export default function TasksTable() {
  const [tasksData, setTasksData] = useState(getTaskData());
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState("");

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasksData([...tasksData, newTask]);
    } else {
      setTasksData(
        tasksData.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowModal(false);
  }

  function handleEditTask(task) {
    setEditTask(task);
    setShowModal(true);
  }

  function handleChangeFavourite(taskId) {
    const toggled = tasksData.map((task) => {
      if (task.id === taskId) {
        return { ...task, isFavourite: !task.isFavourite };
      } else {
        return task;
      }
    });

    setTasksData(toggled);
  }

  function handleDeleteTask(taskId) {
    const filtered = tasksData.filter((task) => task.id !== taskId);

    setTasksData(filtered);
  }

  function handleDeleteAllTask() {
    tasksData.length = 0;
    setTasksData([...tasksData]);
  }

  const searchList = tasksData?.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddModal
          onSave={handleAddTask}
          editTask={editTask}
          onCancel={() => setShowModal(false)}
        />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <SearchBar
            onAddTask={() => {
              setShowModal(true), setEditTask(null);
            }}
            onDeleteAll={handleDeleteAllTask}
            onSearch={setSearch}
          />

          {tasksData.length > 0 ? (
            <TasksList
              taskData={searchList}
              onEdit={handleEditTask}
              onFavourite={handleChangeFavourite}
              onDelete={handleDeleteTask}
            />
          ) : (
            <p className="text-center text-2xl">Task List is Empty !!</p>
          )}
        </div>
      </div>
    </section>
  );
}
