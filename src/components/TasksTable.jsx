import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../contexts";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import SearchBar from "./SearchBar";
import TasksList from "./TasksList";

export default function TasksTable() {
  const { tasksData, dispatch } = useContext(TaskContext);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  // Task Add Or Edit
  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      dispatch({
        type: "ADD_TASK",
        payload: newTask,
      });
      toast.success("New Task Added Successfully");
    } else {
      dispatch({
        type: "EDIT_TASK",
        payload: newTask,
      });

      newTask && toast.success(`Task ${newTask.title} Edited Successfully`);
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
  function handleDeleteTask(isAllDelete) {
    if (isAllDelete) {
      dispatch({
        type: "DELETE_ALL_TASK",
      });
      toast.success("All Tasks Deleted Successfully");
    } else {
      dispatch({
        type: "DELETE_TASK",
        payload: deleteId,
      });
      toast.success("Your Selected Task Deleted Successfully");
    }
    setShowDeleteModal(false);
    setDeleteId(null);
  }

  function handleCancelDelete() {
    setShowDeleteModal(false);
    setDeleteId(null);
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
      {showDeleteModal && (
        <DeleteModal
          onDelete={handleDeleteTask}
          deleteId={deleteId}
          onCancel={handleCancelDelete}
        />
      )}

      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <SearchBar
            onAddTask={() => {
              setShowModal(true), setEditTask(null);
            }}
            onSearch={setSearch}
            setShowDeleteModal={setShowDeleteModal}
          />

          {tasksData.length > 0 ? (
            <TasksList
              taskData={searchList}
              onEdit={handleEditTask}
              onFavourite={handleChangeFavourite}
              onDeleteModal={setShowDeleteModal}
              setDeleteId={setDeleteId}
            />
          ) : (
            <p className="text-center text-2xl">Task List is Empty !!</p>
          )}
        </div>
      </div>
    </section>
  );
}
