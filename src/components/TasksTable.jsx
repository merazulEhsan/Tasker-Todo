import { useContext, useState } from "react";
import { TaskContext } from "../contexts";
import AddModal from "./AddModal";
import SearchBar from "./SearchBar";
import TasksList from "./TasksList";

export default function TasksTable() {
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState("");
  const { tasksData, dispatch } = useContext(TaskContext);

  // Task Add Or Edit
  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      dispatch({
        type: "ADD_TASK",
        payload: newTask,
      });
    } else {
      dispatch({
        type: "EDIT_TASK",
        payload: newTask,
      });
    }
    setShowModal(false);
  }

  function handleEditTask(task) {
    setEditTask(task);
    setShowModal(true);
  }

  // Toggle Favourite
  function handleChangeFavourite(taskId) {
    dispatch({
      type: "IS_FAVOURITE",
      payload: taskId,
    });
  }

  // Delete Task
  function handleDeleteTask(taskId) {
    dispatch({
      type: "DELETE_TASK",
      payload: taskId,
    });
  }

  // Delete All Tasks
  function handleDeleteAllTask() {
    dispatch({
      type: "DELETE_ALL_TASK",
    });
  }

  //Search Task
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
